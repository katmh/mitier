import axios from "axios";
import React from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuHidden: true, loading: false, results: [] };
    this.search = this.search.bind(this);
    this.escapeMenu = this.escapeMenu.bind(this);
    this.selectCourse = this.selectCourse.bind(this);
  }

  async search(event) {
    const query = event.target.value;
    if (!query) {
      return;
    }

    // show loading message
    this.setState({ loading: true });

    // API call
    // TODO: cache results?
    const url = `/api/courses/?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url).catch(() => {
      alert("Unfortunately, an error occured :(");
      return;
    });

    // update data, hide "Loading...", make results menu visible
    this.setState({
      menuHidden: false,
      loading: false,
      results: response.data,
    });
  }

  // hide menu with "Esc"
  // TODO: hide menu when clicking outside the component
  componentDidMount() {
    document.addEventListener("keydown", this.escapeMenu, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escapeMenu, false);
  }
  escapeMenu(event) {
    if (event.keyCode === 27) {
      this.setState({ menuHidden: true });
    }
  }

  selectCourse(e) {
    this.props.addClass(e.target.value);
    this.setState({ menuHidden: true });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.search} loading={this.state.loading} />
        <Dropdown
          menuHidden={this.state.menuHidden}
          selectCourse={this.selectCourse}
          results={this.state.results}
        />
      </div>
    );
  }
}
