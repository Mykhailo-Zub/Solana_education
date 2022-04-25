import React from "react";
import TweetCard from "./TweetCard";

const TweetList = ({ tweets, loading }) => {
  const orderedTweets = tweets?.slice().sort((a, b) => b.timestamp - a.timestamp);

  return (
    <>
      {loading ? (
        <div className="p-8 text-gray-500 text-center">Loading...</div>
      ) : (
        <div className="divide-y">
          {orderedTweets?.map((tweet, i) => {
            return <TweetCard key={i} tweet={tweet} />;
          })}
        </div>
      )}
    </>
  );
};

export default TweetList;
