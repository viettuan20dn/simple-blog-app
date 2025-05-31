import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b78a6c9c?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years in tech leadership",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google engineer",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning UX designer",
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Growth marketing specialist",
    },
  ];

  const stats = [
    { number: "10M+", label: "Happy Customers", icon: "fas fa-users" },
    { number: "50+", label: "Countries Served", icon: "fas fa-globe" },
    { number: "99.9%", label: "Uptime", icon: "fas fa-shield-alt" },
    { number: "24/7", label: "Support", icon: "fas fa-bolt" },
  ];

  const values = [
    {
      icon: "fas fa-bullseye",
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: "fas fa-heart",
      title: "Customer First",
      description:
        "Every decision we make is centered around creating value and delight for our customers.",
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      description:
        "We strive for perfection in everything we do, from code quality to customer service.",
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description:
        "We believe the best results come from diverse teams working together towards common goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* FontAwesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform the digital landscape through
              innovative solutions that empower businesses and delight users
              worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Watch Our Story
                <i className="fas fa-play ml-2 group-hover:scale-110 transition-transform"></i>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
                Join Our Team
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-600/70 rounded-full blur-md animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white shadow-lg relative -mt-12 mx-6 rounded-2xl z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles and vision that guide everything we do
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-full p-2 max-w-md mx-auto">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            {activeTab === "mission" && (
              <div className="text-center animate-fadeIn">
                <i className="fas fa-bullseye text-6xl text-blue-600 mb-6"></i>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  To democratize technology and make powerful digital solutions
                  accessible to businesses of all sizes. We believe that
                  innovation should not be limited by resources, and every
                  company deserves the tools to succeed in the digital age.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center animate-fadeIn">
                <i className="fas fa-star text-6xl text-purple-600 mb-6"></i>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  To be the global leader in innovative digital solutions,
                  creating a world where technology seamlessly integrates with
                  human potential. We envision a future where our platforms
                  empower millions to achieve their dreams and transform
                  industries.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Our Values
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        <i
                          className={`${value.icon} text-2xl text-blue-600`}
                        ></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind our success story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Whether you're looking to partner with us, join our team, or simply
            learn more about what we do, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Get In Touch
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
