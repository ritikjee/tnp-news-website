import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img from "../assets/noImage.png";

function HeroSection({ news }) {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setPage(page + 1);
    setTimeout(() => {
      setLoading(!loading);
    }, 5000);
  }, [loading]);
  return (
    <section className={`relative  flex items-center bg-neutral px-2 py-20`}>
      <button
        className="btn btn-primary hidden md:flex"
        onClick={() => {
          if (page === 0) {
            setPage(news.length - 1);
          } else {
            setPage(page - 1);
          }
        }}
      >
        <AiOutlineLeft />
      </button>
      <div className="flex flex-col items-center">
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white text-2xl font-extrabold  ">
              {news[page % news.length].title}
            </h1>

            <p className="mx-auto text-white mt-4 p-7 max-w-xl sm:text-xl/relaxed">
              {news[page % news.length].description}
            </p>
          </div>
          <div>
            <img
              src={news[page % news.length].urlToImage || img}
              alt="no-img"
              className="w-[500px] h-[500px]"
            />
          </div>
        </div>
        <div className="flex gap-10 py-10">
          <button
            className="btn btn-primary md:hidden "
            onClick={() => {
              if (page === 0) {
                setPage(news.length - 1);
              } else {
                setPage(page - 1);
              }
            }}
          >
            <AiOutlineLeft />
          </button>
          <button className="btn btn-primary">
            <a href={news[page % news.length].url}> Read More</a>
          </button>
          <button
            className="btn btn-primary md:hidden"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary hidden md:flex"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <AiOutlineRight />
      </button>
    </section>
  );
}

export default HeroSection;
