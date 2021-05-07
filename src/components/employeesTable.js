import React from "react";

const styles = {
    tableStyle: {
        width: '90%'
    }
};

function EmployeesTable(props) {
    return (
        <div>
            <div className="table-responsive ">
                <table className="table align-middle table-hover table-bordered border-info mx-auto" style={styles.tableStyle}>
                    <thead>
                        <tr className="table-info">
                            <th scope="col">Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">City</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.results.map(result => (
                            <tr>
                                <th scope="row">{result.name.first + result.name.last}</th>
                                <td><img alt={result.name.first + result.name.last} className="img-fluid" src={result.picture.thumbnail} /></td>
                                <td>{result.dob.date}</td>
                                <td>{result.location.city}</td>
                                <td>{result.email}</td>
                                <td>{result.cell}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default EmployeesTable;