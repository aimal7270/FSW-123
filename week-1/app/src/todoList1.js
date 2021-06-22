import React from 'react';

function Todos(){
    return(
       <div className="TodoDiv">
           <input class="chkBx1" type="checkbox"/>
           <label for="chkBx1">Finish School work</label>

           <input class="chkBx2" type="checkbox"/>
           <label for="chkBx2">Need Groceries</label>
           
           <input class="chkBx3" type="checkbox"/>
           <label for="chkBx3">Cricket game this Sunday</label>

           <input class="chkBx4" type="checkbox"/>
           <label for="chkBx4">Check Gmail</label>
       </div>
    )
}

export default Todos;