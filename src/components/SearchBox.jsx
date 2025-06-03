import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBox({ inAllBlogs }) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex border border-teal-200 rounded-full overflow-hidden hover:shadow-lg focus-within:shadow-lg">
        <input
          type="text"
          placeholder={`Search ${inAllBlogs || "by title"}...`}
          className="px-3 py-1.5 outline-none text-sm sm:w-80"
        />
        <button className="px-3 text-gray-600 hover:text-black border-l hover:bg-gray-100/70">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {inAllBlogs && (
        <>
          <button className="px-4 py-1 text-sm text-white bg-blue-600 border-gray-300 rounded">
            Title
          </button>
          <button className="px-4 py-1 text-sm border hover:border-transparent hover:shadow-md hover:shadow-gray-300 hover:bg-blue-500 border-gray-300 rounded transition duration-200">
            Author
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBox;
