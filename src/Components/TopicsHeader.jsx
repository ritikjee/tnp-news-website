import React from 'react'

function TopicsHeader() {
    const topicData=[
        {
            id:1,
            name:"sports",
        },
        {
            id:2,
            name:"politics",
        },
        {
            id:3,
            name:"entertainment",
        },
        {
            id:4,
            name:"science",
        },
        {
            id:5,
            name:"technology",
        },
        {
            id:6,
            name:"business",
        },
        {
            id:7,
            name:"world",
        },
        {
            id:8,
            name:"health",
        }, 
        {
            id:9,
            name:"travel",
        },
        {
            id:10,
            name:"us"
        },
        {
            id:11,
            name:"asia"
        },
        {
            id:12,
            name:"europe"
        },
        
        {
            id:14,
            name:"africa"
        },
        {
            id:15,
            name:"china"
        },
        {
            id:16,
            name:"india"
        },
        {
            id:17,
            name:"russia"
        },
        {
            id:18,
            name:"twitter"
        },
        {
            id:19,
            name:"facebook"
        },
        {
            id:20,
            name:"instagram"
        },
        {
            id:21,
            name:"youtube"
        }
    
    ]
  return (
    <div className='flex ' >
        <div  className="btn btn-ghost normal-case text-md" >
        Popular Hashtags:
        </div>
        <div  className='flex gap-10  overflow-auto'>
        {topicData.map((topic)=>(
            <p> 
                <a className='w-[40px]' href={`/news/${topic.name}` }><button className="btn btn-outline normal-case btn-success">{topic.name}</button></a>
            </p>
        ))}
        </div>
    </div>
  )
}

export default TopicsHeader