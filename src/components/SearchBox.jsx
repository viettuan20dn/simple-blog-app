import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function SearchBox({ inAllBlogs, onSearch }) {
  const inputRef = useRef(null);
  const [searchType, setSearchType] = useState("title");

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex border border-teal-200 rounded-full overflow-hidden hover:shadow-lg focus-within:shadow-lg">
        <input
          type="text"
          ref={inputRef}
          placeholder={`Search ${inAllBlogs || "by title"}...`}
          className="px-3 py-1.5 outline-none text-sm sm:w-80"
        />
        <button
          className="px-3 text-gray-600 hover:text-black border-l hover:bg-gray-100/70"
          onClick={() =>
            onSearch({ text: inputRef.current.value, type: searchType })
          }
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {inAllBlogs && (
        <>
          <button
            className={`px-4 py-1 text-sm border 
               border-gray-300 rounded transition duration-200
              ${
                searchType === "title"
                  ? "bg-blue-600 text-white"
                  : "hover:shadow-md hover:shadow-gray-300 hover:bg-blue-500 hover:border-transparent"
              }
            `}
            onClick={() => searchType !== "title" && setSearchType("title")}
          >
            Title
          </button>
          <button
            className={`px-4 py-1 text-sm border 
               border-gray-300 rounded transition duration-200
              ${
                searchType === "author"
                  ? "bg-blue-600 text-white"
                  : "hover:shadow-md hover:shadow-gray-300 hover:bg-blue-500 hover:border-transparent"
              }
            `}
            onClick={() => searchType !== "author" && setSearchType("author")}
          >
            Author
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBox;
