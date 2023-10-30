import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeaderNews from '../Components/HeaderNews'
import TopicHeaderCard from '../Components/TopicHeaderCard'
import TopicsHeader from '../Components/TopicsHeader'


function Home() {
    const topicData=[
        {
            id:1,
            topic:"sports",
        },{
            id:2,
            topic:"politics",
        },{
            id:3,
            topic:"entertainment",
        },{
            id:4,
            topic:"health",

        },{
            id:5,
            topic:"travel",
        },{
            id:6,
            topic:"business",
        },{
            id:7,
            topic:"world",
        }
    ]

    return (
        <>
            <Navbar />
            <TopicsHeader/>
            <HeaderNews/>

            {
                topicData.map((topic)=>{
                    return(
                        <TopicHeaderCard
                        key={topic.id}
                        topic={topic.topic}
                        />
                    )
                })
            }
            <Footer/>
        </>
    )
}

export default Home
