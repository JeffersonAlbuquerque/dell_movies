import axios from 'axios'
import {useState, useEffect} from 'react' 

function Filmes(){

    const [info, setInfo] = useState([]);
    useEffect(() => {
        getMovies()
    })
    const getMovies = async() => {
        await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=321f74bfbc522ebf434817ee7dfe517a&linguage=pt-BR&page=1").then((resposta) =>{
        const api = resposta.data.results.map((item)=>{
            return{
                ...item,
                Image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })
        setInfo(api)
        }).catch((error) => {
            alert(`erro, tente novamente mais tarde. ${error}`)
        })
    }



    return(
        <div>
            {info.map((item) =>(
               <section>
                <img src={item.Image} alt=""/>
               </section> 
            ))}
        </div>
    )
}
export default Filmes