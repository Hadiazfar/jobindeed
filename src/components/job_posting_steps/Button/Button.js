import React, { useState } from "react";
function Button() {
  var [usesubmit, setsubmit] = useState(false);
  return (
    <div className="col pt-3 pl-3 pr-3 pb-1">
      <button
        style={{
          backgroundColor: "white",
          width: "20%",
          borderRadius: 12,
          fontSize: 20,
          fontWeight: 700,
          color: "#0d6efd",
        }}
        className="p-3"
      >
        BACK
      </button>
      &ensp;&ensp;
      <button
        type="submit"
        style={{
          backgroundColor: "#0d6efd",
          width: "20%",
          borderRadius: 12,
          fontSize: 20,
          fontWeight: 700,
          color: "white",
        }}
        className="p-3"
        onClick={() => {
          setsubmit(true);
        }}
      >
        NEXT
      </button>
    </div>
  );
}
export default Button;
