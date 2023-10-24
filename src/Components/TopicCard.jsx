import image from '../assets/noImage.png'

function TopicCard({title,description,urlToImage,urlToSrc}) {
    return (
        <>
            <div className="card card-compact sm:w-72 max-w-xs  bg-base-100 shadow-xl my-10">
                <figure><img src={urlToImage||image} className='w-[200px] h-[200px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <a href={urlToSrc}><button className="btn btn-primary">Read more</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopicCard