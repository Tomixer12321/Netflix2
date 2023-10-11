import "./OneMovieSlider.css"
import data from "../data"
import {useState} from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const OneMovieSlider=()=>{
    const [index,setIndex]=useState(0)
    const {image,title,description}=data[index]

    const checkMovieNumber=(movieIndex)=>{
        if(movieIndex<0){
            return data.length-1
        }else if(movieIndex>data.length-1){
            return 0
        }else{
            return movieIndex
        }

        
    }   

    const nextMovie=()=>{
        setIndex((index)=>{
            const newIndex=index+1
            return checkMovieNumber(newIndex)
        })
    }
    const previousMovie=()=>{
        setIndex((index)=>{
            const newIndex=index-1
            return checkMovieNumber(newIndex)
        })
    }

    return <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={previousMovie}>
        <FaArrowAltCircleLeft />
        </button>
        <button onClick={nextMovie}>
        <FaArrowAltCircleRight />
        </button>
    </div>
}
export default OneMovieSlider