import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <h3>Search</h3>
      <input
        className="form-control mr-sm-2"
        id="search-input"
        type="text"
        placeholder="Search for a product"
        value={props.query}
        onChange={props.handleInputChange}
      />
      <br></br>
      <input
        className="form-check-input"
        id="on-stock-checkbox"
        type="checkbox"
        onChange={props.handleCheckboxChange}
        checked={props.onlyAllowStocked}
      />
      <label htmlFor="on-stock-checkbox">Only show products on stock</label>
    </form>
  );
}

export default SearchBar;
