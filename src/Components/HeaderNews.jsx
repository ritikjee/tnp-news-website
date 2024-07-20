import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import HeroSection from "./HeroSection";
function HeaderNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=5a29c60dd2b9444884c083e313b2a8ce&pageSize=10`
        ).then((res) => res.json());
        const data = response;
        setNews(
          data.articles
            .reverse()
            .filter(
              (item) =>
                item.title !== "[Removed]" &&
                item.image !== null &&
                item.image !== ""
            )
        );
      } catch (err) {
        setError(true);
        console.log(error);
      }

      setLoading(false);
    };

    fetchNews();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection news={news} />
        </>
      )}
    </>
  );
}

export default HeaderNews;
