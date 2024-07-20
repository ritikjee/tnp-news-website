import image from "../assets/noImage.png";
function Card({ title, description, urlToImage, urlToSrc }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row card card-side bg-base-100 mx-10 sm:mx-20 my-10  shadow-xl">
        <div className="sm:w-[200px]">
          <figure>
            <img
              src={urlToImage || image}
              alt="Movie"
              className="w-[200px] h-[300px]"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title py-5">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={urlToSrc}>
              <button className="btn btn-primary">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
