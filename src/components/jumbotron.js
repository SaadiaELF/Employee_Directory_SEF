import React from "react";
import Search from "./search";

// Creating a jumbotron holding a search input
function Jumbotron(props) {
    return (
        <div className="p-5 m-4  bg-info border rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Employee Directory</h1>
                <p className="col-md-8 fs-4">Click on the columns labels to filter by heading or use the search box to narrow your results.</p>
                <Search
                    search={props.search}
                    handleFormSubmit={props.handleFormSubmit}
                    handleInputChange={props.handleInputChange}
                />
            </div>
        </div>

    );
}

export default Jumbotron;