import React from 'react';


export default function UserProfile() {
return (
<div className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 md:my-20 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
<img
className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
src="https://via.placeholder.com/150"
alt="User"
/>


<h1 className="text-lg md:text-xl text-blue-800 my-4 text-center transition-colors duration-200 hover:text-blue-500 cursor-pointer">
John Doe
</h1>


<p className="text-gray-600 text-sm md:text-base text-center">
Developer at Maridadi Co. Loves to write code and explore new technologies.
</p>
</div>
);
}