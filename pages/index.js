import Row from "../components/Row";
import React, { useState } from "react";
import Search from "../components/Search";
import { DragDropContext } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

const Index = () => {
  const initialTiers = {
    S: ["6.0001", "CMS.614J"], // course numbers as IDs
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
  const addClass = (number) => {
    setTiers({
      ...tiers,
      S: [...tiers.S, number],
    });
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newDestOrder = tiers[destination.droppableId];
    let newSourceOrder = tiers[source.droppableId];
    if (destination === source) {
      newDestOrder.splice(source.index, 1);
      newDestOrder.splice(destination.index, 0, draggableId);
      setTiers({
        ...tiers,
        [destination.droppableId]: newDestOrder,
      });
    } else {
      newSourceOrder.splice(source.index, 1);
      newDestOrder.splice(destination.index, 0, draggableId);

      setTiers({
        ...tiers,
        [destination.droppableId]: newDestOrder,
        [source.droppableId]: newSourceOrder,
      });
    }
  };
  return (
    <div>
      <header>
        <Search onChange={addClass} />
      </header>
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tiers).map((tierName) => {
            const color = tierColors[tierName];
            return (
              <Row
                key={tierName}
                title={tierName}
                items={tiers[tierName]}
                color={color}
              />
            );
          })}
        </DragDropContext>
      </section>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Index;
