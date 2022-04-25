import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchTweets } from "../api/fetch-tweets";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";
import TweetSearch from "./TweetSearch";
import { useSlug } from "../helpers/useSlug";

const PageTopics = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);
  const [viewedTopic, setViewedTopic] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const slugTopic = useSlug(topic);

  const fetchTopicTweets = async () => {
    if (slugTopic === viewedTopic) return;
    try {
      setLoading(true);
      const fetchedTweets = await fetchTweets();
      setTweets(fetchedTweets);
      setViewedTopic(slugTopic);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { topic } = params;
    if (topic) {
      fetchTopicTweets();
    } else {
      setTweets([]);
      setViewedTopic(null);
    }
  }, [params]);

  const search = () => {
    navigate(`/topics/${slugTopic}`);
  };

  const addTweet = (tweet) => {
    const allTweets = [...tweets];
    allTweets.push(tweet);
    setTweets(allTweets);
  };
  return (
    <>
      <TweetSearch placeholder="topic" disabled={!slugTopic} modelValue={slugTopic} update={setTopic} search={search} />
      {viewedTopic ? (
        <div>
          <TweetForm addTweet={addTweet} forcedTopic={viewedTopic}></TweetForm>
          <TweetList tweets={tweets} loading={loading}></TweetList>
          {tweets.length === 0 ? <div className="p-8 text-gray-500 text-center">No tweets were found in this topic...</div> : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PageTopics;
