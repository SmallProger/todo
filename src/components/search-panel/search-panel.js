import React from "react";
import "./search-panel.css";

export default class SearchPanel extends React.Component {
  state = {
    searchingTxt: "",
  };
  onLabelChange = (e) => {
    this.setState({ searchingTxt: e.target.value });

    let { onChangeSearch } = this.props;
    onChangeSearch(e.target.value);
  };

  render() {
    return (
      <input
        className="search-input form-control"
        type="text"
        placeholder="search"
        onChange={this.onLabelChange}
        value={this.state.searchingTxt}
      ></input>
    );
  }
}
