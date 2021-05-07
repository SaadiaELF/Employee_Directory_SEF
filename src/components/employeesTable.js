import React from "react";
const styles = {
    tableStyle: {
      width : '90%'
    }
  };
function EmployeesTable() {
    return (
        <div>
            <div className="table-responsive ">
                <table className="table align-middle table-hover table-bordered border-info mx-auto" style={styles.tableStyle}>
                    <thead>
                        <tr  className="table-info">
                            <th scope="col">Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">City</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default EmployeesTable;