import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100  border-l-4 border-red-500 text-red-700 p-9">
        <div className="flex flex-col ">
          <div>
            <p className="font-bold">An error occurred</p>
            <p className="text-sm">{error}</p>
          </div>
          {/* <button className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Try Again
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
