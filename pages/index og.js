import React, { useState } from "react";
import Row from "../old/Row";
import { DragDropContext } from "react-beautiful-dnd";

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
              <Row
                key={tierName}
                title={tierName}
                color={tierColors[tierName]}
                items={tiers[tierName]}
              />
            );
          })}
        </DragDropContext>
      </section>
    </div>
  );
};

export default Index;
