import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../components/PostCard";
import { FilterBar, SearchBox, SortBar } from "../components";
import PaginationDemo from "../components/Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+84 123 456 789",
    location: "Ho Chi Minh City, Vietnam",
    bio: "Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about building scalable web applications.",
    company: "Tech Solutions Inc.",
    position: "Senior Developer",
    website: "https://johndoe.dev",
  });

  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "GraphQL",
  ];

  const activities = [
    {
      icon: "fas fa-code",
      text: "Completed React Advanced Course",
      time: "2 hours ago",
    },
    {
      icon: "fas fa-star",
      text: "Received 5-star rating on project",
      time: "1 day ago",
    },
    {
      icon: "fas fa-upload",
      text: "Updated portfolio with new project",
      time: "3 days ago",
    },
    {
      icon: "fas fa-users",
      text: "Joined Tech Meetup Group",
      time: "1 week ago",
    },
  ];

  const stats = [
    { label: "Projects", value: "24", icon: "fas fa-folder" },
    { label: "Reviews", value: "89", icon: "fas fa-star" },
    { label: "Followers", value: "1.2K", icon: "fas fa-users" },
    { label: "Rating", value: "4.9", icon: "fas fa-heart" },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              My profile information
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                    <i className="fas fa-camera text-white text-sm"></i>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Last Name"
                      />
                    </div>
                    <input
                      type="text"
                      value={profileData.position}
                      onChange={(e) =>
                        handleInputChange("position", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Position"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    <p className="text-blue-600 font-semibold mb-4">
                      {profileData.position}
                    </p>
                  </>
                )}

                <div className="flex justify-center space-x-4 mb-6">
                  <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors">
                    <i className="fab fa-linkedin text-blue-600"></i>
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                    <i className="fab fa-github text-gray-600"></i>
                  </button>
                  <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors">
                    <i className="fab fa-twitter text-blue-400"></i>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                    >
                      <i
                        className={`${stat.icon} text-2xl text-blue-600 mb-2`}
                      ></i>
                      <div className="text-2xl font-bold text-gray-800">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Profile Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-envelope mr-2 text-blue-600"></i>
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">
                        {profileData.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-phone mr-2 text-blue-600"></i>
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">
                        {profileData.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">
                        {profileData.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-building mr-2 text-blue-600"></i>
                      Company
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">
                        {profileData.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-user mr-2 text-blue-600"></i>
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 leading-relaxed">
                      {profileData.bio}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-globe mr-2 text-blue-600"></i>
                    Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={profileData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <a
                      href={profileData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-blue-50 rounded-xl text-blue-600 hover:text-blue-800 transition-colors block"
                    >
                      {profileData.website}
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className={`
                  absolute top-4 right-4
                  px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    isEditing
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
              >
                <FontAwesomeIcon
                  icon={isEditing ? faPenToSquare : faPenToSquare}
                  className="mr-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 bg-white">
        <h1 className="text-2xl font-bold tex t-gray-800">
          My favourite blogs
        </h1>
        <div className="mt-10">
          <SortBar />
        </div>

        <div className="mt-4">
          <FilterBar />
        </div>

        <div className="mt-4 flex justify-center">
          <SearchBox />
        </div>

        <div className="mt-6 flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} isViewingOwnPosts />
            </div>
          ))}
        </div>
        <PaginationDemo />
      </div>
    </div>
  );
}
