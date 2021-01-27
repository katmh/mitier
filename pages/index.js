import Head from "next/head";
import Row from "../components/Row";
import React, { useState } from "react";
import Search from "../components/Search";
import { DragDropContext } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

const Index = () => {
  const initialTiers = {
    S: ["8.01", "8.02", "18.01", "18.02", "7.012", "5.111"], // course numbers as IDs
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
  const removeCourse = (tier, number) => {
    console.log(`removing ${number} from ${tier}`);
    console.log(tiers[tier]);
    setTiers({
      ...tiers,
      [tier]: tiers[tier].filter((c) => c != number),
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
  const META = {
    title: `MITier: Tier rank MIT classes`,
    description: `All in the title`,
    url: `https://mitier.vercel.app`,
    siteName: `MITier`,
    image: `https://mitier.vercel.app/screenshot.jpg`,
    imageAlt: `Example tier list of MIT classes`,
  };
  return (
    <div>
      <Head>
        <title>{META.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <meta property="og:url" content={META.url} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content={META.siteName} />
        <meta name="twitter:image" content={META.image} />
        <meta name="twitter:image:alt" content={META.imageAlt} />
      </Head>
      <header>
        <Search addClass={addClass} />
      </header>
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tiers).map((tierName) => {
            const color = tierColors[tierName];
            return (
              <Row
                removeCourse={removeCourse}
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
