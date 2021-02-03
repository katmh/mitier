import CONFIG from "../config";
import Row from "../components/Row";
import SEO from "../components/SEO";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DragDropContext } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

// since Next.js uses SSR
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
resetServerContext();

const Index = () => {
  const [tiers, setTiers] = useState(CONFIG.INITIAL_TIERS);

  const addCourse = (id) => {
    if (Object.values(tiers).flat().includes(id)) {
      alert(`You've already added ${id}`);
      return;
    }
    setTiers({
      ...tiers,
      S: [...tiers.S, id],
    });
  };
  const removeCourse = (tier, id) => {
    setTiers({
      ...tiers,
      [tier]: tiers[tier].filter((c) => c != id),
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
      <Header addCourse={addCourse} />
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tiers).map((tierName) => (
          <Row
            removeCourse={removeCourse}
            key={tierName}
            title={tierName}
            items={tiers[tierName]}
            color={CONFIG.TIER_COLORS[tierName]}
          />
        ))}
      </DragDropContext>
      <Footer />
    </>
  );
};

export default Index;
