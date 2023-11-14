import './style.css'

export default function PostCard({ post }) {
    //$ { post } está pegando o post diretamente do {props.post}

    return(
        <div className='post'>
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className='post-content'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>  
            </div>
        </div>
    )
}