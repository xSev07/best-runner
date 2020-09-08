import React from "react";
import Header from "../header/header.jsx";
import TypeFilter from "../type-filter/type-filter.jsx";
import TrainingTable from "../training-table/training-table.jsx";

const TrainingPage = () => {
  return (
    <>
      <Header/>
      <main>
        <h1 className="visually-hidden">Your trainings</h1>
        <section>
          <TypeFilter/>
          <TrainingTable/>
        </section>
      </main>
    </>
  );
};

export default TrainingPage;
