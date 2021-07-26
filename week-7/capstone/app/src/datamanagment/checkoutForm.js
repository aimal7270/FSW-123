import React from 'react';
import { useState } from 'react';
import EditForm from './EditForm'

function CheckoutForm({Title, Author, CheckedOut, SeriesOrder, _id, editMovies}) {
    const [edit, setEdit] = useState(false);

    function series(){
        if(SeriesOrder !== undefined){
            return "Movie " + SeriesOrder + " in Series"
        }
    }

    return(
        <div>
        {!edit ?
            <>
                <div id="display" >
                    <h2>{Title}</h2>
                    <h4>By: {Author}</h4>
                    <p> {series()}</p>
                    <p>Checked Out: {CheckedOut + ''}</p>
                    <button
                        onClick={() => setEdit(prevToggle => !prevToggle)}>Edit</button>

                </div>
            </>
            :
            <>
                <div id="display">
                <EditForm
                    _id = {_id}
                    Title = {Title}
                    Author = {Author}
                    CheckedOut = {CheckedOut}
                    SeriesOrder = {SeriesOrder}
                    editMovies = {editMovies} />

                <button id="Close" onClick={() => setEdit(prevToggle => !prevToggle)}>Close</button>
                
                </div>
            </>
        }
        </div>
        )
}

export default CheckoutForm