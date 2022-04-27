import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useWorkspace } from "../helpers/useWorkspace";

const TweetCard = ({ tweet }) => {
  const { wallet } = useWorkspace();
  const authorRoute = useMemo(() => {
    if (wallet && wallet.publicKey.toBase58() === tweet.author.toBase58()) {
      return "/profile";
    } else {
      return `/users/${tweet.author.toBase58()}`;
    }
  }, [tweet, wallet]);
  return (
    <div className="px-8 py-4">
      <div>
        <h3 className="inline font-semibold" title={tweet.author}>
          <Link to={authorRoute} className="hover:underline">
            {tweet.author_display}
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <time className="text-gray-500 text-sm" title={tweet.created_at}>
          <Link to={`/tweet/${tweet.publicKey.toBase58()}`} className="hover:underline">
            {tweet.created_ago}
          </Link>
        </time>
      </div>
      <p className="whitespace-pre-wrap">{tweet.content}</p>
      {tweet.topic ? (
        <Link to={`/topics/${tweet.topic}`} className="inline-block mt-2 text-pink-500 hover:underline">
          #{tweet.topic}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default TweetCard;
