import fullInventory from '../datamanagment/data';
import React from 'react';
import CheckoutForm from '../datamanagment/checkoutForm';

class Manage extends React.Component {
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
    editBooks = (inputs, _id) =>{
        let updateBooks = [...this.state.arrayBooks]
        let changeMe = updateBooks.findIndex(book => book._id === _id)
            updateBooks[changeMe] = inputs;
                this.setState({
                    arrayBooks: updateBooks
                }) 
            } 

    render(){
        const library = this.state.arrayBooks.map((item, index)  => {
        return(
        <CheckoutForm
            key = {index}
            _id = {item._id}
            Title = {item.Title}
            Author = {item.Author}
            CheckedOut = {item.CheckedOut}
            SeriesOrder = {item.SeriesOrder}
            editBooks = {this.editBooks}
        />
        )})
    return(
        <div>
            <h1 id="title">Watch List</h1>
            <div className="Library">{library}</div>
        </div>
    )
}}
export default Manage