import axios from "axios";
import React from "react";
import CONFIG from "../config";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import debounce from "../utils/debounce";

let cache = {}; // map search query to class IDs

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuHidden: true, loading: false, results: [] };
    this.search = this.search.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.selectCourse = this.selectCourse.bind(this);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  async search(event) {
    // show loading message
    this.setState({ loading: true });

    const query = event.target.value;
    if (!query) {
      this.setState({ loading: false });
      return;
    }

    if (query in cache) {
      this.setState({
        menuHidden: false,
        results: cache[query],
      });
    }

    // API call
    const url = `/api/courses/?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url).catch(() => {
      alert("Unfortunately, an error occured :(");
      return;
    });
    if (!response) {
      return;
    }
    // cache results
    cache[query] = response.data;

    // make results menu visible, hide "Loading...", update data
    this.setState({
      menuHidden: false,
      loading: false,
      results: response.data,
    });
  }

  // hide menu with "Esc" or by clicking outside component
  componentDidMount() {
    document.addEventListener("keydown", this.handleEsc, false);
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEsc, false);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleEsc(event) {
    if (event.keyCode === 27) {
      this.setState({ menuHidden: true, loading: false });
    }
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ menuHidden: true, loading: false });
    }
  }

  selectCourse(e) {
    this.props.addCourse(e.target.value);
    this.setState({ menuHidden: true });
  }

  render() {
    return (
      <header>
        <h1>{CONFIG.HEADING}</h1>
        <div id="search">
          <div ref={this.wrapperRef}>
            <SearchInput
              onChange={debounce(this.search)}
              loading={this.state.loading}
            />
            <Dropdown
              menuHidden={this.state.menuHidden}
              selectCourse={this.selectCourse}
              results={this.state.results}
            />
          </div>
          <div></div>
        </div>
        <style jsx>{`
          header {
            padding: 0 1rem;
            margin-bottom: 2rem;
          }

          h1 {
            margin-bottom: 0.75rem;
            color: #222;
          }

          #search {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </header>
    );
  }
}
