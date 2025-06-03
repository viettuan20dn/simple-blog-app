import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
import { FilterBar, SearchBox, SortBar } from "../components";
import PaginationDemo from "../components/Pagination/Pagination";

function MyBlogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8 bg-white">
      <Container>
        <div className="flex justify-center">
          <SearchBox/>
        </div>

        <div className="mt-4">
          <SortBar />
        </div>

        <div className="mt-4">
          <FilterBar />
        </div>

        <div className="mt-6 flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} isViewingOwnPosts/>
            </div>
          ))}
        </div>

        <PaginationDemo />
      </Container>
    </div>
  );
}

export default MyBlogs;
