import React from "react";
// Hero biography
// Add markers for place of birth
// First appearance
// Publisher
const HeroBio = (hero) => {
  return (
    <>
      <div>{hero["full-name"]}</div>
      <div>{hero["alter-egos"]}</div>
      <div>{hero["place-of-birth"]}</div>
      <div>{hero["first-appearance"]}</div>
      <div>{hero["publisher"]}</div>
    </>
  );
};

export default HeroBio;
