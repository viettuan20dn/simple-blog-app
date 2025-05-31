import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import logout from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then((res) => {
      dispatch(logout);
    });
  };

  return (
    <button
      className="inline-bock px-4 py-1 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
