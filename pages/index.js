import Row from "../components/Row";
import SEO from "../components/SEO";
import React, { useState } from "react";
import Search from "../components/Search";
import { DragDropContext } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

// since Next.js uses SSR
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
resetServerContext();

// default courses
const INITIAL_TIERS = {
  S: ["8.01", "8.02", "18.01", "18.02", "7.012", "5.111"], // course numbers as IDs
  A: [],
  B: [],
  C: [],
  D: [],
};

// thanks https://colorswall.com/palette/3297/
const TIER_COLORS = {
  S: "#ff7f7e",
  A: "#ffbf7f",
  B: "#ffdf80",
  C: "#feff7f",
  D: "#beff7f",
};

const Index = () => {
  const [tiers, setTiers] = useState(INITIAL_TIERS);

  const addCourse = (number) => {
    if (Object.values(tiers).flat().includes(number)) {
      alert(`You've already added ${number}`);
      return;
    }
    setTiers({
      ...tiers,
      S: [...tiers.S, number],
    });
  };
  const removeCourse = (tier, number) => {
    setTiers({
      ...tiers,
      [tier]: tiers[tier].filter((c) => c != number),
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      // e.g. item was dragged outside a Droppable
      return;
    }
    if (
      // i.e. no change
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
    <>
      <SEO />
      <Search addCourse={addCourse} />
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tiers).map((tierName) => (
          <Row
            removeCourse={removeCourse}
            key={tierName}
            title={tierName}
            items={tiers[tierName]}
            color={TIER_COLORS[tierName]}
          />
        ))}
      </DragDropContext>
    </>
  );
};

export default Index;
