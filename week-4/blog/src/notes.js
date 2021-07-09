/*import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch'
import './App.css' */

function App() {
    return (
    <>
        <BrowserRouter>
            <header>
                <Link to= "/">Home</Link>
                <Link to="/about"></Link>
            </header>
            <main>
                <Switch>
                    <Route exact ={true} path="/">
                        <Home />
                    </Route>
                    <Route path ="/about">
                        <About />
                    </Route>


                    <Route path ="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    </>
)
}

//Categories

  <BrowserRouter>
    <div>
    <h2> </h2>
    <ul>
        <li><Link to="/movies/sports">Sports</Link></li>
        <li><Link to="/movies/documentary">Documentary</Link></li>
    </ul>
    <Route path="movies/:genres">
        <Movies/>
    </Route>
    </div>
    </BrowserRouter>   
//Params
    import {useParams} from 'react-router-dom';
    function Movies() {
        const {genres} = useParams();
        return <h3>Category: {genres}</h3>
    }

// Nested

<BrowserRouter>
    <div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/posts">Posts</Link></li>
        </ul>
        <hr />
        <Switch>
            <Route exact path="/">
                <h3>Home</h3>
            </Route>
            <Route  path="/posts">
                <Posts />
            </Route>
        </Switch>
    </div>
    </BrowserRouter>

    return(
        <>
        <h3>Posts</h3>
        <ul>
            <li><Link to={`${url}/post1`}>Post1</Link> </li>
            <li><Link to={`${url}/post2`}>Post2</Link> </li>
            <li><Link to={`${url}/post3`}>Post3</Link> </li>
        </ul>
        <Switch>
            <Route expact path ={path}>
                <h3>Select a blog post</h3>
            </Route>
            <Route path={`${path}/:postId`}>
                <Post />
            </Route>
        </Switch>
        </>
    )
    function Post(){

        let {postId} = useParams();
        return(
            <div>
                <h3>{postId}</h3>
            </div>
        )
    }
