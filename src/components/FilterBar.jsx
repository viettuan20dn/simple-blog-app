import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

function FilterBar({onChangeTagModes}) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function handleChangeSelect(e){
    const modes = e.map(item=>item.value);
    onChangeTagModes(modes);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex relative [clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]">
        <span className="bg-gray-300 ps-4 pe-8 py-1 text-black text-lg font-medium">
          Filter
        </span>
      </div>

      <Select
        isMulti
        name="tags"
        className="basic-multi-select flex-1"
        classNamePrefix="select"
        placeholder="Select tags..."
        options={options}
        onChange={handleChangeSelect}
      />
    </div>
  );
}

export default FilterBar;
