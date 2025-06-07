import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
import { FilterBar, SearchBox, SortBar } from "../components";
import PaginationDemo from "../components/Pagination/Pagination";
import blogCardApi from "../api/blogCardApi";
import { NO_SORT, ASC, DESC } from "../utils/consts";
import { isArrayIncluded } from "../utils";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ text: "", type: "title" });
  const [sortModes, setSortModes] = useState({
    likes: NO_SORT,
    postedTime: NO_SORT,
  });
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    blogCardApi
      .getAll()
      .then((res) => setPosts(res.data))
      .catch((err) =>
        console.log("AllPosts Page :: Axios Call Error :: ", err)
      );
  }, []);

  let filteredPosts = [];

  if (!!searchQuery.text) {
    if (searchQuery.type === "title") {
      filteredPosts = posts.filter((post) => {
        if (activeTags.length && !isArrayIncluded(setActiveTags, post.tags))
          return false;
        return post.title?.toLowerCase().includes(searchQuery.text.toLowerCase());
      });
    } else if (searchQuery.type === "author") {
      filteredPosts = posts.filter((post) => {
        if (activeTags.length && !isArrayIncluded(setActiveTags, post.tags))
          return false;
        return post.name?.toLowerCase().includes(searchQuery.text.toLowerCase());
      });
    } else {
      console.log("Search type is wrong");
    }
  } else {
    filteredPosts = posts;
    // Filtering by tags
    if (!!activeTags.length) {
      filteredPosts = filteredPosts.filter((post) =>
        isArrayIncluded(activeTags, post.tags)
      );
    }
  }

  let sortedPosts = [...filteredPosts];

  // Sorting with likeCount
  if (sortModes.likes) {
    sortedPosts.sort((a, b) => {
      return sortModes.likes === ASC
        ? a.likeCount - b.likeCount
        : b.likeCount - a.likeCount;
    });
  }
  // Sorting with postedTime
  if (sortModes.postedTime) {
    sortedPosts.sort((a, b) => {
      return sortModes.postedTime === ASC
        ? new Date(a.$createdAt) - new Date(b.$createdAt)
        : new Date(b.$createdAt) - new Date(a.$createdAt);
    });
  }

  function handleSortMode(type) {
    setSortModes((s) => {
      const oldValue = s[type];
      s.likes = NO_SORT;
      s.postedTime = NO_SORT;

      s[type] = (oldValue + 1) % 3;
      return { ...s };
    });
  }

  return (
    <div className="w-full py-8 bg-white">
      <Container>
        <div className="flex justify-center">
          <SearchBox inAllBlogs search={searchQuery} onSearch={setSearchQuery} />
        </div>

        <div className="mt-4">
          <SortBar sortModes={sortModes} onSort={handleSortMode} />
        </div>

        <div className="mt-4">
          <FilterBar onChangeTagModes={setActiveTags} />
        </div>

        <div className="mt-6 flex flex-wrap">
          {sortedPosts.length === 0 ? (
            <div className="w-full text-center text-gray-500 py-10">
              No posts found.
            </div>
          ) : (
            sortedPosts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>

        <PaginationDemo />
      </Container>
    </div>
  );
}

export default AllPosts;
