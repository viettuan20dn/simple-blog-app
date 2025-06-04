import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { set } from "./store/likedPostIdsSlice";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import authService from "./appwrite/auth";
import appwriteService from "./appwrite/config";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserAndLikes = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
          const likedPostIds = await appwriteService.getLikedPosts(
            userData.$id
          );
          if (likedPostIds) {
            dispatch(set(likedPostIds));
          }
        } else {
          dispatch(logout());
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndLikes();
  }, [dispatch]);

  return loading ? null : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 text-left">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  );
}

export default App;
