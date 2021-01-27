import axios from "axios";
import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const query = event.target.value;
    const url = `/api/courses/?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url).catch(() => {
      alert("Unfortunately, an error occured :(");
      return;
    });
    console.log(response.data);
    this.setState({ results: response.data });
  }
  render() {
    return (
      <div>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search courses"
          onChange={this.handleChange}
        />
        <div className="results">
          {this.state.results.map((course) => (
            <div key={course.number}>
              {course.number} {course.title}
            </div>
          ))}
        </div>
        <style jsx>{`
          .results {
            position: absolute;
            width: 200px;
            top: 0;
            right: 0;
          }
        `}</style>
      </div>
    );
  }
}
