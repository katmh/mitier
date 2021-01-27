import axios from "axios";
import React from "react";

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
    // TODO: cache results
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
        <div id="search_container">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search courses"
            onChange={this.search}
          />
          <p className={"loading" + (!this.state.loading && " hidden")}>
            Loading...
          </p>
        </div>
        <ul
          className={"results" + (this.state.menuHidden && " hidden")}
          onChange={this.selectCourse}
        >
          {this.state.results.map((course) => (
            <li className="option">
              <input
                key={course.number}
                type="checkbox"
                value={course.number}
                id={course.number}
                name={course.number}
              />
              <label htmlFor={course.number}>
                {course.number} {course.title}
              </label>
            </li>
          ))}
        </ul>
        <style jsx>{`
          #search_container {
            display: flex;
          }

          #search {
            padding: 0.5rem 0.6rem;
            border-radius: 2px;
            color: #222;
            border: 1px solid #aaa;
            font-size: 1.1rem;
            width: 100%;
            max-width: 25rem;
          }

          .loading {
            margin-left: 0.5rem;
            font-style: italic;
            color: #444;
          }

          ul {
            display: block;
            overflow-y: scroll;
            position: absolute;
            float: left;
            max-height: 25rem;
          }

          .hidden {
            display: none;
          }

          li {
            list-style: none;
          }

          label {
            display: block;
            max-width: 400px;
            padding: 0.5rem;
            background: #eee;
            transition: 0.1s;
            cursor: pointer;
          }

          label:hover {
            background: #ddd;
          }

          input[type="checkbox"] {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}
