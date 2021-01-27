import React from "react";
import dynamic from "next/dynamic";
import courses from "../data/courses.json";

const SelectSearch = dynamic(() => import("react-select-search"), {
  ssr: false,
});

const options = courses.map((course) => ({
  value: course.number,
  name: `${course.number} ${course.title}`,
}));
export default class Search extends React.Component {
  render() {
    return (
      <SelectSearch
        options={options}
        name="course"
        placeholder="Search courses"
        search
        onChange={(val) => this.props.onChange(val)}
      />
    );
  }
}
