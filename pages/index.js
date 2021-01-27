import React, { useState } from "react";
import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../components/initial-data";

const Index = () => {
  const initialTiers = {
    S: ["6.0001", "CMS.614"], // course numbers as IDs
    A: [],
    B: [],
    C: [],
    D: [],
  };
  const tierColors = {
    // thanks https://colorswall.com/palette/3297/
    S: "#ff7f7e",
    A: "#ffbf7f",
    B: "#ffdf80",
    C: "#feff7f",
    D: "#beff7f",
  };
  const [tiers, setTiers] = useState(initialTiers);
  const onDragEnd = (result) => {
    // todo
    console.log("ok");
  };
  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search classes..."
          // value={query}
          // onChange={onSearch}
        />
      </header>
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tiers).map((tierName) => {
            return (
              <Column key={tierName} title={tierName} items={tiers[tierName]} />
            );
          })}
        </DragDropContext>
      </section>
    </div>
  );
};

export default Index;
