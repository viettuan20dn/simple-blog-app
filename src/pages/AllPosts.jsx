import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
import { SearchBox, SortBar } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  //TODO: add case for array length 0

  return (
    <div className="w-full py-8 bg-white">
      <Container>
        <div className="flex justify-center">
          <SearchBox />
        </div>

        <div className="mt-4">
          <SortBar />
        </div>

        <div className="mt-5 flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
