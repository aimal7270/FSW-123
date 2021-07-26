import fullInventory from '../datamanagment/data';
import React from 'react';
import Datadisplay from '../datamanagment/datadisplay';

class Home extends React.Component {
    constructor(){
        super() 
        this.state ={
            arrayBooks: fullInventory.map((item, index) => 
            ({
                key: index,
                _id: item._id,
                Title: item.Title,
                Author: item.Author,
                CheckedOut: item.CheckedOut,
                SeriesOrder: item.SeriesOrder
            })
            )}}
    
    render(){
        const library = this.state.arrayBooks.map((item, index)  => {
        return(
        <Datadisplay
            key = {index}
            _id = {item._id}
            Title = {item.Title}
            Author = {item.Author}
            CheckedOut = {item.CheckedOut}
            SeriesOrder = {item.SeriesOrder}
        />
        )})
    return(
        <div>
            <h1 id="title">Movies and Dramas</h1>
            {library}
        </div>
    )
}}
export default Home