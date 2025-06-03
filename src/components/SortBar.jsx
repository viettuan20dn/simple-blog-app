import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function SortBar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex relative [clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]">
        <span className="bg-gray-300 ps-4 pe-8 py-1 text-black text-lg font-medium">
          Sort
        </span>
      </div>
      <button
        className={`
        h-3/4
        relative inline-flex items-center px-4 py-1 text-sm font-medium
        transition-all duration-200 ease-in-out
        border rounded-full border-black
        hover:shadow-md hover:shadow-gray-400
      `}
      >
        Likes
        <FontAwesomeIcon icon={faSort} className="ml-1 w-3 h-3" />
      </button>

      <button
        className={`
        relative inline-flex items-center px-4 py-1 text-sm font-medium
        transition-all duration-200 ease-in-out
        border rounded-full border-black
        hover:shadow-md hover:shadow-gray-400
      `}
      >
        Posted time
        <FontAwesomeIcon icon={faSort} className="ml-1 w-3 h-3" />
      </button>
    </div>
  );
}

export default SortBar;
