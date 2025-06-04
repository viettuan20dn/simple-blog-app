import { use, useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

import {
  PostCard,
  Container,
  FeaturedBlog,
  TagCard,
  AuthorCard,
} from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const likedPostList = useSelector((state) => state.likedPostIds.favPostIds);

  const tags = [
    {
      tagName: "Business",
      icon: "https://img.icons8.com/fluency/96/meeting-room.png",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, harum!",
    },
    {
      tagName: "Startup",
      icon: "https://img.icons8.com/fluency/96/insidea.png",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, harum!",
    },
    {
      tagName: "Economy",
      icon: "https://img.icons8.com/fluency/96/money-circulation.png",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, harum!",
    },
    {
      tagName: "Technology",
      icon: "https://img.icons8.com/fluency/96/electronics.png",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, harum!",
    },
  ];

  const topUsers = [
    {
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Floyd Miles",
      likes: "335k",
      socialLinks: [
        { type: "facebook", url: "https://facebook.com/floyd" },
        { type: "twitter", url: "https://twitter.com/floyd" },
        { type: "instagram", url: "https://instagram.com/floyd" },
        { type: "linkedin", url: "https://linkedin.com/in/floyd" },
      ],
    },
    {
      avatar: "https://i.pravatar.cc/150?img=10",
      name: "Leslie Alexander",
      likes: "210k",
      socialLinks: [
        { type: "twitter", url: "https://twitter.com/leslie" },
        { type: "linkedin", url: "https://linkedin.com/in/leslie" },
      ],
    },
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "Jacob Jones",
      likes: "147k",
      socialLinks: [{ type: "instagram", url: "https://instagram.com/jacob" }],
    },
    {
      avatar: "https://i.pravatar.cc/150?img=12",
      name: "Jenny Wilson",
      likes: "500k",
      socialLinks: [
        { type: "facebook", url: "https://facebook.com/jenny" },
        { type: "twitter", url: "https://twitter.com/jenny" },
        { type: "instagram", url: "https://instagram.com/jenny" },
      ],
    },
    {
      avatar: "https://i.pravatar.cc/150?img=8",
      name: "Wade Warren",
      likes: "278k",
      socialLinks: [{ type: "linkedin", url: "https://linkedin.com/in/wade" }],
    },
  ];

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        posts.documents.forEach((post) => {
          post.isInitiallyLiked = post && likedPostList.includes(post.$id);
        });

        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>Login to see posts</h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full pb-8 bg-white">
      <FeaturedBlog />
      <Container>
        <h2 className="text-base md:text-xl xl:text-3xl font-bold mt-5">
          Recently Posts
        </h2>
        <div className="w-full">
          <div className="flex flex-wrap py-2">
            {posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="underline border py-1 px-3 rounded-md font-semibold hover:shadow-md hover:bg-blue-50/50">
              View more
            </button>
          </div>
        </div>

        <h2 className="text-base md:text-xl xl:text-3xl font-bold mt-5">
          Featured Posts
        </h2>
        <div className="w-full">
          <div className="flex flex-wrap py-2">
            {posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="underline border py-1 px-3 rounded-md font-semibold hover:shadow-md hover:bg-blue-50/50">
              View more
            </button>
          </div>
        </div>

        <div className="text-center my-10">
          <h1 className="">Choose A Catagory</h1>
          <div className="flex flex-wrap justify-between pt-2">
            {tags.map((tag, idx) => (
              <TagCard {...tag} key={idx} />
            ))}
          </div>
        </div>

        <div className="text-center my-10">
          <h1 className="">List of favourite Authors</h1>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-5 gap-5 pt-2">
            {topUsers.map((user, idx) => (
              <AuthorCard {...user} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
