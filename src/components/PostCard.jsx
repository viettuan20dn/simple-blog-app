import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faHeart } from "@fortawesome/free-solid-svg-icons";

function PostCard({ $id, title, featuredImage, content }) {
  const navigate = useNavigate();

  return (
    <div className="w-full border rounded-md p-2">
      <div className="w-full justify-center mb-4 relative">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full rounded-md object-cover object-center h-40 sm:h-44 md:h-48"
        />
        <div className="absolute top-1 right-2 text-gray-400 text-3xl cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
          <div className="absolute text-white text-[0.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            10
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-[0.6rem] justify-between">
        <div className="text-gray-500">
          By <span className="text-purple-600 cursor-pointer">John Doe</span> |{" "}
          {"May 23, 2020"}
        </div>
        <div className="rounded-lg bg-blue-200 px-2 py-0.5 font-semibold text-blue-600">
          Technology
        </div>
      </div>
      <h2 className="text-base font-bold">{title}</h2>
      <div className="text-gray-500 text-sm line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eveniet
        sequi doloribus repudiandae animi vitae? Sequi dolore similique tenetur
        accusamus, ea delectus nesciunt labore perspiciatis voluptas, ratione
        nisi, quas magni!
      </div>
      <button
        onClick={() => navigate(`/post/${$id}`)}
        className="bg-yellow-400 hover:bg-yellow-500 w-full py-1 mt-2.5 font-semibold transition-colors duration-200 group"
      >
        Read detail{" "}
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-xs align-baseline group-hover:ml-1"
        />
      </button>
    </div>
  );
}

export default PostCard;
