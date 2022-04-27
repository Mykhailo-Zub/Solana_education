import React, { useEffect, useState } from "react";
import { FetchTweets } from "../api/fetch-tweets";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

const PageHome = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchTweets()
      .then(setTweets)
      .finally(() => setLoading(false));
  }, []);

  const addTweet = (tweet) => {
    const allTweets = [...tweets];
    allTweets.push(tweet);
    setTweets(allTweets);
  };

  return (
    <>
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={tweets} loading={loading} />
    </>
  );
};

export default PageHome;
