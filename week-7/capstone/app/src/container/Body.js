import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Manage from '../pages/Manage'
import SearchAvaliability from "../pages/SearchAvailability";


export default function Body(){
    return(
        <div id="body">
            <Switch>
                <Route exact={true} path='/'>
                    <Home/>
                </Route>
                <Route path ="/SearchAvailability">
                   <SearchAvaliability />
                </Route>
                <Route path = "/Manage">
                    <Manage />
                </Route>
            </Switch>
        </div>
    )
}