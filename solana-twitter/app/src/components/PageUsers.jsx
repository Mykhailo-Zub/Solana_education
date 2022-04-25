import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchTweets } from "../api/fetch-tweets";
import TweetList from "./TweetList";
import TweetSearch from "./TweetSearch";

const PageUsers = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState(null);
  const [viewedAuthor, setViewedAuthor] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const fetchAuthorTweets = async () => {
    if (author === viewedAuthor) return;
    try {
      setLoading(true);
      const fetchedTweets = await fetchTweets();
      setTweets(fetchedTweets);
      setViewedAuthor(author);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { author } = params;
    if (author) {
      fetchAuthorTweets();
    } else {
      setTweets([]);
      setViewedAuthor(null);
    }
  }, [params]);

  const search = () => {
    navigate(`/users/${author}`);
  };

  return (
    <>
      <TweetSearch placeholder="public key" disabled={!author} modelValue={author} update={setAuthor} search={search} />
      {viewedAuthor ? (
        <div>
          <TweetList tweets={tweets} loading={loading}></TweetList>
          {tweets.length === 0 ? <div className="p-8 text-gray-500 text-center">User not found...</div> : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PageUsers;
