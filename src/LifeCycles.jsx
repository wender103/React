import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      }
    ],
    counter: 0,
  }
  timeOutUpdate = null

  //$ Vai ser execultado uma vez apenas, geralmente usado para pegar algo da api   
  componentDidMount() {
    clearTimeout(this.timeOutUpdate)
    this.handleTimeOut()
  }

  componentDidUpdate() {
    this.handleTimeOut()
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state
    posts[0].title = 'O título mudou'

    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state

    return(
      <div className='App'>
        <h1>{counter}</h1>

        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}