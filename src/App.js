import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './Components/NewsCards/NewsCards'
import useStyles from './AppStyles'


const alanbtn = '8383d66e5b3eaa2ebc0ecd5e4bf407d42e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () =>{
    const classes = useStyles()
    const [news, setNews] = useState([])
    useEffect(()=>{
        alanBtn({
            key: alanbtn,
            onCommand: ({command, articles})=>{
                if(command === 'newsHeadlines'){
                    setNews(articles)
    
                }

            }
        })

    },[])
    return(
        <div>
            { !news.length &&
                <div className={classes.logoContainer}>
               <img src="https://alan.app/voice/images/previews/preview.jpg"/>
           </div>
            }
           <div>
            <NewsCards articles={news}/>
            </div>
       
            
        </div>
    )
}


export default App