import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <ul id="header">
                <li id="hover"><Link to ='/'>Home</Link> </li>
                <li id="hover"><Link to = '/SearchAvailability'>Available Movies and Dramas</Link> </li>
                <li id="hover"><Link to = '/Manage'>Edit Watch List</Link> </li>
            </ul>
        </div>
    );
}