import {Route,Switch} from 'react-router-dom'
import Home from '../pages/Home.js';
import About from './../pages/About.js';
import Contact from './../pages/Contact.js';
import Post from './../pages/Post.js';


export default function Body(){
    return(
        <div id="body">
            <Switch>
                    <Route exact ={true} path="/">
                        <Home />
                    </Route>
                    <Route path ="/About">
                        <About />
                    </Route>
                    <Route path ="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/Post/:slug">
                        <Post />
                    </Route>
            </Switch>
        </div>
    )}   