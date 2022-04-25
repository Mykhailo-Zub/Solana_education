import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import TweetCard from "./TweetCard";
import { getTweet } from "../api/get-tweet";
import { useParams } from "react-router";

const PageTweet = () => {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function fetchTweet() {
      const { tweet } = params;
      try {
        setLoading(true);
        const fetchedTweet = await getTweet(new PublicKey(tweet));
        setTweet(fetchedTweet);
      } catch (e) {
        setTweet(null);
      } finally {
        setLoading(false);
      }
    }
    fetchTweet();
  }, [params]);

  return (
    <>
      {loading ? (
        <div className="p-8 text-gray-500 text-center">Loading...</div>
      ) : !tweet ? (
        <div className="p-8 text-gray-500 text-center">Tweet not found</div>
      ) : (
        <TweetCard tweet={tweet} />
      )}
    </>
  );
};

export default PageTweet;
