import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { ASC, DESC, NO_SORT } from "../utils/consts";

function SortBar({ sortModes, onSort }) {
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
        ${!!sortModes.likes && "bg-blue-500 text-white border-none"}
      `}
        onClick={() => {
          onSort("likes");
        }}
      >
        Likes
        {sortModes.likes == NO_SORT && (
          <FontAwesomeIcon icon={faSort} className="ml-1 w-3 h-3" />
        )}
        {sortModes.likes == DESC && (
          <FontAwesomeIcon icon={faSortDown} className="ml-1 w-3 h-3" />
        )}
        {sortModes.likes == ASC && (
          <FontAwesomeIcon icon={faSortUp} className="ml-1 w-3 h-3" />
        )}
      </button>

      <button
        className={`
        relative inline-flex items-center px-4 py-1 text-sm font-medium
        transition-all duration-200 ease-in-out
        border rounded-full border-black
        hover:shadow-md hover:shadow-gray-400
        ${!!sortModes.postedTime && "bg-blue-500 text-white border-none"}

      `}
        onClick={() => {
          onSort("postedTime");
        }}
      >
        Posted time
        {sortModes.postedTime == NO_SORT && (
          <FontAwesomeIcon icon={faSort} className="ml-1 w-3 h-3" />
        )}
        {sortModes.postedTime == DESC && (
          <FontAwesomeIcon icon={faSortDown} className="ml-1 w-3 h-3" />
        )}
        {sortModes.postedTime == ASC && (
          <FontAwesomeIcon icon={faSortUp} className="ml-1 w-3 h-3" />
        )}
      </button>
    </div>
  );
}

export default SortBar;
