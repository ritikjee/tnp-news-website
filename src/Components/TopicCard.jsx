import image from "../assets/noImage.png";

function TopicCard({ title, description, urlToImage, urlToSrc }) {
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <img
          src={urlToImage || image}
          onError={(e) => {
            e.target.src = image;
          }}
          className="w-full h-48 object-cover"
          alt="topic"
        />

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={urlToSrc}>
              <button className="btn btn-primary">Read more</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopicCard;
