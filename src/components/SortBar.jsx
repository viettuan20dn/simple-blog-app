import React from "react";

function SortBar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center bg-gray-200 text-xs px-3 py-1 rounded-l-full rounded-r-md font-medium">
        Sort
      </div>

      <select className="border text-sm px-3 py-1 rounded">
        <option>Likes</option>
        <option>Comments</option>
      </select>

      <select className="border text-sm px-3 py-1 rounded">
        <option>Posted time</option>
        <option>Newest</option>
        <option>Oldest</option>
      </select>

      <select className="border text-sm px-3 py-1 rounded">
        <option>Tag</option>
        <option>Design</option>
        <option>Code</option>
      </select>
    </div>
  );
}

export default SortBar;
