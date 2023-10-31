import React, { useEffect,useState } from 'react'
import TopicCard from './TopicCard'

function TopicHeaderCard({ topic }) {
    const str = topic.charAt(0).toUpperCase() + topic.slice(1);
    const [topics, setTopic] = useState([]);

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=5a29c60dd2b9444884c083e313b2a8ce&pageSize=6`)
                const data = await response.json();
                console.log(data);
                setTopic(data.articles);
            }
            catch (error) {
                console.log(error); 
            }
        }

        fetchTopic();
        }, [topic])

                return (
                    <>
                        <div className='my-10 w-screen'>
                            <h1 className="btn btn-ghost normal-case text-2xl" >{str}</h1>
                            <hr class="h-px  border-0 bg-gray-500 mx-7"/>
                            <div className=' flex justify-center ' >
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                            {!topics ? <h1>Nothing here</h1> :
                                topics.map((topic, index) => {
                                    return (
                                        <TopicCard
                                            key={index}
                                            title={topic.title}
                                            description={topic.description}
                                            urlToImage={topic.urlToImage}
                                            urlToSrc={topic.url}
                                        />
                                    )
                                })
                            }
                            </div>
                            </div>
                            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>
                            <div className=' flex justify-end mx-10'>
                                <a href={`/news/${topic}`}>
                            <button className='btn btn-primary ' >
                                Read More</button>
                                </a>

                                </div>
                        </div>
                    </>

                )
            }

export default TopicHeaderCard