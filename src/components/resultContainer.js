import React, { Component } from "react";
import EmployeesTable from "./employeesTable";
import Jumbotron from "./jumbotron";
import API from "../utils/API";

class ResultContainer extends Component {
  state = {
    search: "",
    sort: "",
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

  searchHandler = (searchTerm) => {
    this.state.results = this.state.results.filter(result => result.location.country.toLowerCase().includes(searchTerm) || result.name.first.toLowerCase().includes(searchTerm) || result.name.last.toLowerCase().includes(searchTerm) || result.dob.date.toLowerCase().includes(searchTerm))
    this.setState({ results: this.state.results })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchHandler(this.state.search);
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  sortByNameHandler = () => {
    this.state.results = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    this.setState({ results: this.state.results })
  };

  sortByDOBHandler = () => {
    this.state.results = this.state.results.sort((a, b) => (a.dob.date > b.dob.date) ? -1 : 1);
    this.setState({ results: this.state.results })
  };

  sortByCountryHandler = () => {
    this.state.results = this.state.results.sort((a, b) => (a.location.country > b.location.country) ? 1 : -1);
    this.setState({ results: this.state.results })
  };

  render() {
    return (
      <div>
        <Jumbotron
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeesTable
          results={this.state.results}
          sortByNameHandler={this.sortByNameHandler}
          sortByDOBHandler={this.sortByDOBHandler}
          sortByCountryHandler={this.sortByCountryHandler}
        />
      </div>
    );
  }
}

export default ResultContainer;