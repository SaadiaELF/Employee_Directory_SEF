import React from "react";

const styles = {
    inputStyle: {
      width : '30%'
    }
  };

function Jumbotron() {
    return (
        <div className="p-5 m-4  bg-info border rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Employee Directory</h1>
                <p className="col-md-8 fs-4">Click on the columns labels to filter by heading or use the search box to narrow your results.</p>
                <div className="input-group mb-3 position-absolute start-30 end-30 " style={styles.inputStyle}>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon">
                    </input>
                    <button className="btn btn-outline-dark" type="button" id="button-addon">Search</button>
                </div>
            </div>
        </div>

    );
}

export default Jumbotron;