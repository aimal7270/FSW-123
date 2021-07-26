import fullInventory from "../datamanagment/data";
import React from "react";
import SearchFunctions from "../datamanagment/SearchFunctions";

class SearchAvaliability extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayBooks: fullInventory.map((item, index) => ({
        key: index,
        _id: item._id,
        Title: item.Title,
        Author: item.Author,
        CheckedOut: item.CheckedOut,
        SeriesOrder: item.SeriesOrder,
      })),
    };
  }

  render() {
    const library = this.state.arrayBooks.map((item, index) => {
      return (
        <SearchFunctions
          key={index}
          _id={item._id}
          Title={item.Title}
          Author={item.Author}
          CheckedOut={item.CheckedOut}
          SeriesOrder={item.SeriesOrder}
        />
      );
    });
    return (
      <div>
        <h1 id="title">Available to Watch</h1>
        <div className="Library">{library}</div>
      </div>
    );
  }
}
export default SearchAvaliability;
