import {Link} from 'react-router-dom'

const postdata = require('./data/Posts')

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