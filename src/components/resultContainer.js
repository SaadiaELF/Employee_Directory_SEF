import React, { Component } from "react";
import EmployeesTable from "./employeesTable";
import Jumbotron from "./jumbotron";
import API from "../utils/API";

class ResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.loadEmployees();
  };

  loadEmployees = () => {
    API.getRandomEmployees()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <Jumbotron />
        <EmployeesTable results={this.state.results} />
      </div>
    );
  }
}

export default ResultContainer;