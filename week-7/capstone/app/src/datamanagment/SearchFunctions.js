import React from 'react';

function SearchFunctions({Title, Author, CheckedOut, SeriesOrder}) {

   function series(){
        if(SeriesOrder !== undefined){
            return "Movie " + SeriesOrder + " in Series"
        }
    }

    function Available(){
        if(CheckedOut === false){
            return(
                <div id="display">
                    <h2>{Title}</h2>
                    <h4>By: {Author}</h4>
                    <p> {series()}</p>
                    <p>Checked Out: {CheckedOut + ''}</p>
                </div>
            )
        }
    }
    return(
        <div>
            {Available()}
        </div>
        
    )
}

export default SearchFunctions