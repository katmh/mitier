import React from "react";

export default class SearchInput extends React.Component {
  render() {
    return (
      <div id="search_container">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search courses"
          onChange={this.props.onChange}
        />
        <p id="loading" className={!this.props.loading && " hidden"}>
          Loading...
        </p>
        <style jsx>{`
          #search_container {
            display: flex;
            align-items: center;
          }

          #search {
            padding: 0.4rem 0.5rem;
            border-radius: 2px;
            color: #222;
            border: 1px solid #aaa;
            font-size: 1rem;
            width: 100%;
            max-width: 25rem;
          }

          #loading {
            margin-left: 0.75rem;
            font-style: italic;
            color: #444;
          }
        `}</style>
      </div>
    );
  }
}
