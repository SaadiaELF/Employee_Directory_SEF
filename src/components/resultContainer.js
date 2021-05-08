import React, { Component } from "react";
import EmployeesTable from "./employeesTable";
import Jumbotron from "./jumbotron";
import API from "../utils/API";

// Extending a Component class
class ResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // Mounting component with random employees
  componentDidMount() {
    this.loadEmployees();
  };

  // Loading random employees from the api call and storing the results in the state
  loadEmployees = () => {
    API.getRandomEmployees()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  // Filtering result by a search term
  searchHandler = (searchTerm) => {
    const filteredData = this.state.results.filter(result => result.location.country.toLowerCase().includes(searchTerm.toLowerCase()) || result.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || result.name.last.toLowerCase().includes(searchTerm.toLowerCase()) || result.dob.date.toLowerCase().includes(searchTerm.toLowerCase()))
    this.setState({ results: filteredData })
  };

  // Storing the search term inside the state
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchHandler(this.state.search);
  };

  // Setting a state to handle input change
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // Sorting table by first name
  sortByNameHandler = () => {
    const sortedResults = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    this.setState({ results: sortedResults  })
  };

   // Sorting table by date of birth
  sortByDOBHandler = () => {
    const sortedResults = this.state.results.sort((a, b) => (a.dob.date > b.dob.date) ? -1 : 1);
    this.setState({ results: sortedResults })
  };

   // Sorting table by country
  sortByCountryHandler = () => {
    const sortedResults  = this.state.results.sort((a, b) => (a.location.country > b.location.country) ? 1 : -1);
    this.setState({ results: sortedResults })
  };

  // rendering components
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