import React from "react";

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
