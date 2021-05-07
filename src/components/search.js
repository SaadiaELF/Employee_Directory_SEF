import React from "react";

const styles = {
  inputStyle: {
    width: '30%'
  }
};

function Search(props) {
  return (
    <div className="input-group mb-3 position-absolute start-30 end-30 " style={styles.inputStyle}>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon" />
      <button onClick={props.handleFormSubmit} className="btn btn-outline-dark" type="button" id="button-addon">Search</button>
    </div>
  );
}

export default Search;