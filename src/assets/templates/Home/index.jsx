import { Component } from 'react'
import './style.css'
import { loadPosts } from '../../utils/load-posts'
import Posts from '../../components/Posts'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/Input'

export default class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    psotsPerPage: 2,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  //$ Fazendo a páginação
  loadPosts = async () => {
    const { page, psotsPerPage } = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({ 
      posts: postsAndPhotos.slice(page, psotsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      psotsPerPage,
      allPosts,
      posts,

    } = this.state

    const nextPage = page + psotsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + psotsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, psotsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + psotsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    : posts

    return(
      
      <section className='container'>
        {!!searchValue && (
          <h1>Search value {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length <= 0 && (
          <p>Não existe posts</p>
        )}

        {!searchValue && (
          <Button 
            text='Load more posts' 
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </section>
    )
  }
}