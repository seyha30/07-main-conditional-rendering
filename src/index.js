import React from "react";
import ReactDOM from "react-dom/client";
const mainElement = document.getElementById("root");
const root = ReactDOM.createRoot(mainElement);

root.render(
  <section>
    <h1>Sally Ride's packing List</h1>
    <ul>
      <Item isPacked={true} name="Space suit" />
      <Item isPacked={false} name="Space not suit" />
      <TernaryItem isPacked={true} name="Photo of Tam" />
    </ul>
  </section>
);

function TernaryItem({ name, isPacked }) {
  return <li>{isPacked ? name + " ✔" : name}</li>;
}

function Item({ name, isPacked }) {
  if (isPacked) return <li className="item"> {name} ✔</li>;
  return (
    <li className="item" style={{ color: "red" }}>
      {name} 𐤕
    </li>
  );
}
