import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="p-8 text-gray-500 text-center">
      <p>404 — Not Found</p>
      <Link to="/" className="block text-pink-500 hover:underline mt-2">
        Go back home
      </Link>
    </div>
  );
};

export default PageNotFound;
