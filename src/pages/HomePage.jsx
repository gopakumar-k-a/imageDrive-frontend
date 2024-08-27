import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Image Drive!</h1>
        <p className="text-lg mb-10">
          You can perform the following operations by clicking on the specific
          links below:
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/profile"
            className="text-blue-600 hover:underline text-2xl"
          >
            My Profile
          </Link>
          <p className="text-gray-700">
            View and update your personal profile details.
          </p>

          <Link
            to="/my-uploads"
            className="text-blue-600 hover:underline text-2xl"
          >
            My Images
          </Link>
          <p className="text-gray-700">
            Check all the images you've uploaded to Image Drive.
          </p>

          <Link to="/upload" className="text-blue-600 hover:underline text-2xl">
            Upload Image
          </Link>
          <p className="text-gray-700">
            Upload new images to Image Drive and manage your gallery.
          </p>

          {/* <Link to="/logout" className="text-blue-600 hover:underline text-2xl">
            Log Out
          </Link>
          <p className="text-gray-700">
            Exit your session and log out of Image Drive.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
