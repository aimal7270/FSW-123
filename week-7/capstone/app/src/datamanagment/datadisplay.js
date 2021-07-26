import React from 'react';

function datadisplay({Title, Author, CheckedOut, SeriesOrder}) {

   function series(){
        if(SeriesOrder !== undefined){
            return "Movie " + SeriesOrder + " in Series"
        }
    }

        return(
        <div id="display">
            <h2>{Title}</h2>
            <h4>By: {Author}</h4>
            <p> {series()}</p>
            <p>Checked Out: {CheckedOut + ''}</p>
        </div>
        )
}

export default datadisplay