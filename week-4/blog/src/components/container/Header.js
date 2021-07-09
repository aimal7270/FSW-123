import {BrowserRouter,Link} from 'react-router-dom'


export default function Header(){
    return(
        <BrowserRouter>
        <div >
            <ul id="header">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
        </BrowserRouter>
    )}