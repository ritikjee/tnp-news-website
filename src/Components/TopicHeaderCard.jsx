import React, { useEffect, useState } from "react";
import TopicCard from "./TopicCard";
import { AiFillRightCircle } from "react-icons/ai";
import { fetchNews } from "../utils/fetchNews";

function TopicHeaderCard({ topic }) {
  const str = topic.charAt(0).toUpperCase() + topic.slice(1);
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    const fetchTopic = async () => {
      const data = await fetchNews({ topic });
      setTopic(data);
    };
    fetchTopic();
  }, [topic]);

  return (
    <>
      <div className="m-10">
        <div className="flex justify-between items-center mb-20">
          <h1 className="btn btn-ghost normal-case text-2xl">{str}</h1>
          <a href={`/news/${topic}`}>
            <button className="btn btn-link">
              Discover Similar Topic
              <AiFillRightCircle />
            </button>
          </a>
        </div>
        <hr class="h-px  border-0 bg-gray-500 mx-7" />
        <div className=" mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">
            {!topics ? (
              <h1>Nothing here</h1>
            ) : (
              topics.map((topic, index) => {
                return (
                  <TopicCard
                    key={index}
                    title={topic.title}
                    description={topic.description}
                    urlToImage={topic.urlToImage}
                    urlToSrc={topic.url}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopicHeaderCard;
