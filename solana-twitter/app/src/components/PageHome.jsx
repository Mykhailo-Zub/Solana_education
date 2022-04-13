import React, { useEffect, useState } from "react";
import { fetchTweets } from "../api/fetch-tweets";

const PageHome = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTweets()
      .then(setTweets)
      .finally(() => setLoading(false));
  });

  const addTweet = (tweet) => setTweets(tweet);

  return <>Home</>;
};

export default PageHome;
