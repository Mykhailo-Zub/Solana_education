import React, { useEffect, useState } from "react";
import { authorFilter, FetchTweets } from "../api/fetch-tweets";
import { useWorkspace } from "../helpers/useWorkspace";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

const PageProfile = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { wallet } = useWorkspace();

  useEffect(() => {
    if (!wallet) return;
    FetchTweets([authorFilter(wallet.publicKey.toBase58())])
      .then(setTweets)
      .finally(() => setLoading(false));
  }, [wallet]);

  const addTweet = (tweet) => {
    const allTweets = [...tweets];
    allTweets.push(tweet);
    setTweets(allTweets);
  };

  return (
    <>
      {wallet ? (
        <div v-if="true" className="border-b px-8 py-4 bg-gray-50">
          {wallet?.publicKey?.toBase58()}
        </div>
      ) : (
        ""
      )}
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={tweets} loading={loading} />
    </>
  );
};

export default PageProfile;
