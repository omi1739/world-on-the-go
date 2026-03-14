import React, { Suspense } from "react";
import Countries from "./Components/Countries/Countries";

const countriesPromice = fetch(
  "https://openapi.programming-hero.com/api/all",
).then(res => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Data is Loading....</h2>}>
       
        <Countries countriesPromice = {countriesPromice}></Countries>

      </Suspense>
    </div>
  );
};

export default App;
