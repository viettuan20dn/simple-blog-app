import React from "react";

function SearchBox() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex border border-teal-200 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search ..."
          className="px-3 py-1 outline-none text-sm w-64"
        />
        <button className="px-3 text-gray-600 hover:text-black">🔍</button>
      </div>

      <button className="px-4 py-1 text-sm bg-teal-100 border border-gray-300 rounded hover:bg-teal-200">
        Title
      </button>
      <button className="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
        Author
      </button>
    </div>
  );
}

export default SearchBox;
