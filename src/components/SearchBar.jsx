import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  onChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm)
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <input
            placeholder="Search for a video."
            type="text"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
