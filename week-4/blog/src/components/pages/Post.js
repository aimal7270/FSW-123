import {useParams} from 'react-router'
const postdata = require('../../data/posts.json')

 function Post(){
   
    let{slug}  = useParams(),
    post = findPost(slug)
    return(
      
       <div>
           <h1 id ="title">{post.title}</h1>
           <p id="content">{post.content}</p>
           
       </div>
      
   )
    function findPost(slug){
        return postdata.find((Q) => Q.slug === slug)
    }

}

export default Post