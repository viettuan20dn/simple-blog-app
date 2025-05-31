import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8 bg-white">
      <Container>
        <div className="flex flex-wrap justify-between mb-2">
          <button id="P0" className="border rounded-md px-7 underline font-semibold tracking-widest hover:scale-105 hover:bg-slate-100 hover:shadow-lg">
            Back
          </button>
          {isAuthor && (
            <div className="flex flex-wrap gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <button className="text-white bg-orange-400 rounded-md px-7 tracking-widest hover:shadow-md hover:scale-105">
                  Edit
                </button>
              </Link>
              <Link to="">
                <button className="text-white bg-red-500 rounded-md px-7 tracking-widest hover:shadow-md hover:scale-105">
                  Delete
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="authorInfo flex items-center gap-3 mt-8 mb-4">
          <div className="flex items-center justify-start">
            <img
              src="https://i.pravatar.cc/150?img=3"
              className="w-10 h-10 rounded-full object-cover"
              alt="avatar"
            />
          </div>
          <div>
            <div className="text-purple-700 font-semibold">Andrew Jonson</div>
            <div className="text-[0.8rem] text-gray-500">
              Posted on 27th Januaray 2022
            </div>
          </div>
        </div>

        <div className="title-blog">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="inline-flex items-center">
            <img
              src="https://img.icons8.com/fluency/96/insidea.png"
              alt="tag-icon"
              className="w-5 h-5"
            />
            <span className="font-semibold text-sm ml-1 tracking-wide">
              Startup
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center mt-5 relative">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
          />
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mt-4 mb-6">
          <div className="browser-css">{parse(post.content)}</div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/2 border-dashed border-b border-gray-500 h-1"></div>
        </div>
        <div className="w-full flex justify-between">
          <button className="border rounded-md px-7 underline font-semibold tracking-widest hover:scale-105 hover:bg-slate-100 hover:shadow-lg shadow-md">
            Back
          </button>
          <a href="#H0" className="border border-blue-100 rounded-md px-7 underline font-medium tracking-widest hover:scale-105 hover:bg-slate-100 hover:shadow-lg shadow-md">
            Lên đầu
            <FontAwesomeIcon icon={faArrowUpLong} className="text-xs text-blue-700 ml-1 animate-bounce"/>
          </a>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
