
function TagCard({ tagName, icon, des }) {
  return (
    <div className="p-4 w-1/4">
      <div className="border p-6 rounded-md hover:bg-yellow-400 hover:border-none transition duration-200 hover:shadow-lg">
        <img className="h-20 w-20 mx-auto" src={icon} alt="icon" />
        <div className="font-semibold text-lg mt-4">{tagName}</div>
        <div className="text-sm">{des}</div>
      </div>
    </div>
  );
}

export default TagCard;
