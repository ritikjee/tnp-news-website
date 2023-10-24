import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'

function NewsPage() {
  const params = useParams()
  const [news, setNews] = useState([])
   const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  useEffect(() => {
    const fetchNews = async () => {
      try{
      const response = await fetch(`https://newsapi.org/v2/everything?q=${params.name}&sortBy=publishedAt&pageSize=${22*page}&apiKey=5a29c60dd2b9444884c083e313b2a8ce&language=en`).then((res) => res.json()) 

      const data= response;
      setNews(data.articles.reverse().filter((item)=>item.title!=='[Removed]')).slice(0,22)}
      catch(err){
        setError(true)
        console.log(error)
      }
      console.log(news.length)
      
      setLoading(false)

    } 

    fetchNews()
  } , [page])
    return (
      <>
      {loading?<Loading/>:
      <div>
        <Navbar/>
      {
        news.map((item,idx) => (
          <Card key={idx} title={item.title} description={item.description} urlToImage={item.urlToImage} urlToSrc={item.url} />
        ))
      }
      <div className='flex justify-center items-center gap-20 py-20'>
        <button className={page===1?'btn btn-disabled':'btn btn-primary'}  onClick={()=>{
          if(page>1){
            setPage(page-1)
          }
        }}>prev</button>
        <div className='btn'>
          {page}
        </div>
        <button className={page===5?'btn btn-disabled':'btn btn-primary'} onClick={()=>{
          if(page<5){
          setPage(page+1)
          }
        }}>next</button>
      </div>
      <Footer/>
    </div>}
    

    </>
  )
}

export default NewsPage