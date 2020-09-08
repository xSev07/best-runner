import React from "react";
import Header from "../header/header.jsx";
import TypeFilter from "../type-filter/type-filter.jsx";

const TrainingPage = () => {
  return (
    <>
      <Header/>
      <main>
        <h1 className="visually-hidden">Your trainings</h1>
        <section>
          <TypeFilter/>
        </section>
      </main>
    </>
  );
};

export default TrainingPage;
