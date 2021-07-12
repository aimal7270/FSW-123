import {Link} from 'react-router-dom'
import  postdata from '../../data/posts.json'

function Home (){
    const posts = postdata.map(post => {
        return(
            <Link to={'/post/' + post.slug} key={post.slug}>  
                <h1>{post.title}</h1>
             </Link>
        )
    })
    return(
        <div>
            {posts}
        </div>
    )
}

export default Home