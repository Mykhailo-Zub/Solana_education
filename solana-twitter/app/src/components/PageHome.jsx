import React, { useEffect, useState } from "react";
import { fetchTweets } from "../api/fetch-tweets";
import TweetForm from "./TweetForm";

const PageHome = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTweets()
      .then(setTweets)
      .finally(() => setLoading(false));
  });

  const addTweet = (tweet) => setTweets(tweet);

  return (
    <>
      <TweetForm addTweet={addTweet} />
    </>
  );
};

export default PageHome;
