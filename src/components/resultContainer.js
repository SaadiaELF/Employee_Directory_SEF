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


  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Jumbotron
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeesTable results={this.state.results} />
      </div>
    );
  }
}

export default ResultContainer;