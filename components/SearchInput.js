import React from "react";
import CONFIG from "../config";

export default class SearchInput extends React.Component {
  render() {
    return (
      <div id="search_container">
        <input
          id="search"
          name="search"
          type="text"
          placeholder={CONFIG.SEARCH.INPUT_PLACEHOLDER}
          onChange={this.props.onChange}
        />
        <p id="loading" className={!this.props.loading && " hidden"}>
          {CONFIG.SEARCH.LOADING_MESSAGE}
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
          }

          @media (min-width: 30rem) {
            #search {
              width: 25rem;
            }
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
