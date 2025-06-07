import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { useState } from "react";
import { formatDate } from "../utils";

function PostCard({
  $id,
  $createdAt,
  title,
  featuredImage,
  content,
  isViewingOwnPosts,
  likeCount = 0,
  isInitiallyLiked = false,
  name="Unknown"
}) {
  const [isLiked, setIsLiked] = useState(isInitiallyLiked);
  const [likes, setLikes] = useState(likeCount);

  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const handleLikePost = () => {
    setIsLiked((i) => !i);
    setLikes((l) => {
      return isLiked ? l - 1 : l + 1;
    });    
    
    if (isLiked) {
      appwriteService.likePost($id, userData.$id);
      appwriteService.toggleLikePost($id, likeCount, false);
    } else {
      appwriteService.likePost($id, userData.$id);
      appwriteService.toggleLikePost($id, likeCount, true);
    }
  };

  return (
    <div className="w-full border rounded-md p-2">
      <div className="w-full justify-center mb-4 relative">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full rounded-md object-cover object-center h-40 sm:h-44 md:h-48"
        />
        <div
          className="absolute top-1 right-2 text-gray-400 text-3xl cursor-pointer"
          onClick={handleLikePost}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`${isLiked ? "text-red-600" : null}`}
          />
          <div className="absolute text-white text-[0.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {likes}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-[0.6rem] justify-between">
        <div className="text-gray-500">
          By <span className="text-purple-600 cursor-pointer">{name}</span> |{" "}
          {formatDate($createdAt)}
        </div>
        <div className="rounded-lg bg-blue-200 px-2 py-0.5 font-semibold text-blue-600">
          Technology
        </div>
      </div>
      <h2 className="text-base font-bold h-12 line-clamp-2">{title}</h2>
      <div className="text-gray-500 text-sm h-10 line-clamp-2 overflow-hidden">{parse(content)}</div>

      {isViewingOwnPosts ? (
        <>
          <button className="text-xs p-0.5 px-2 underline rounded-full border tracking-wider hover:text-blue-600">
            Detail
          </button>
          <div className="flex justify-between mt-2">
            <button className="bg-yellow-400 font-semibold py-1 px-2 text-black hover:shadow-lg">
              Update
            </button>
            <button className="bg-red-500 font-semibold py-1 px-2 text-white hover:shadow-lg">
              Delete
            </button>
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default PostCard;
