import React from "react";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <div
        className="spinner-grow text-primary mt-8"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;