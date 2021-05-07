import React from "react";
import dateFormat from "dateformat";

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
                            <th onClick={props.handleSort} scope="col">Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Country</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.results.map(result => (
                            <tr  key={result.login.uuid} >
                                <th scope="row">{`${result.name.first } ${result.name.last}`}</th>
                                <td><img alt={`${result.name.first } ${result.name.last}`} className="img-fluid" src={result.picture.thumbnail} /></td>
                                <td>{dateFormat(result.dob.date, "dd, mmmm, yyyy") }</td>
                                <td>{result.location.country}</td>
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