import React from "react";
export default function Button({ value,styling,onClick }) {
  return <button className={`${styling}`} onClick={onClick}>{value} </button>;
}
