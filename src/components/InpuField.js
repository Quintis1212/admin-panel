import React from "react";

export default function InpuField({value,setValue,eventTargetFilter,label}) {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label} :</label>
      <input
        type="text"
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => eventTargetFilter(e, setValue)}
      />
    </>
  );
}
