// Make UserProfile responsive with Tailwind CSS

import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
        />
        <h2 className="font-bold text-lg sm:text-lg md:text-xl">Jane Doe</h2>
        <p className="text-gray-600 text-sm sm:text-sm md:text-base">
          Frontend Developer passionate about building responsive and
          user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
