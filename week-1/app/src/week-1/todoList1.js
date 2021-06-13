import React from 'react';

function Todos(){
    var chkBx = {width: "25px"}
    return(
       <div className="TodoDiv">
           <div><input class="chkBx1" type="checkbox"/></div>
           <div><label for="chkBx1">Finish School work</label></div>

           <div><input class="chkBx2" type="checkbox"/></div>
           <div><label for="chkBx2">Need Groceries</label></div>
           
           <div><input class="chkBx3" type="checkbox"/></div>
           <div><label for="chkBx3">Cricket game this Sunday</label></div>

           <div><input class="chkBx4" type="checkbox"/></div>
           <div><label for="chkBx4">Check Gmail</label></div>
       </div>
    )
}

export default Todos;