import React from "react";

export default function Card() {
  document.body.onmousemove = (e) => {
    for (const date of document.getElementsByClassName("card")) {
      const rect = date.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      date.style.setProperty("--mouse-x", `${x}px`);
      date.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <div className="card relative flex min-h-80 items-center justify-center rounded-md bg-gray-100/[0.3]">
      <div className="card-border"></div>
      <div className="card-content rounded-[inherit] bg-gray-900/[0.85] p-6">
        <h1 className="mb-3 text-3xl font-bold text-gray-200">title</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vel
          adipisci
        </p>
      </div>
    </div>
  );
}
