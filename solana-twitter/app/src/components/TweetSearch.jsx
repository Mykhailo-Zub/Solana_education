import React from "react";

const TweetSearch = ({ modelValue, placeholder, disabled, update, search }) => {
  return (
    <div className="relative border-b">
      <input
        type="text"
        className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
        placeholder={placeholder}
        value={modelValue || ""}
        onChange={(e) => update(e.target.value)}
      />
      <div className="absolute left-6 inset-y-0 flex pl-3 pr-2">
        {placeholder === "topic" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 m-auto ${modelValue ? "text-gray-700" : "text-gray-400"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 m-auto ${modelValue ? "text-gray-700" : "text-gray-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        )}
      </div>
      <div className={`absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2 ${modelValue ? "text-gray-700" : "text-gray-400"}`}>
        <slot name="icon"></slot>
      </div>
      <div className="absolute right-0 inset-y-0 flex items-center pr-8">
        <button
          className={`${
            !disabled ? "text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white" : "text-gray-400 bg-gray-200 cursor-not-allowed"
          } rounded-full px-4 py-1  font-semibold`}
          disabled={disabled}
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TweetSearch;
