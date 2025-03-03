import { useState, useContext, useEffect } from 'react';

import '../CSS/carousel.css';

import {ThemeContext} from '../context/ThemeContext';

const Carousel = ({images}) => {

    const {darkMode} = useContext(ThemeContext);


    let timeOut = null

    const [autoPlay , setAutoPlay] = useState((true))
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const increaseIndex = () => {
        if (currentIndex === (images.length -1)) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const decreaseIndex = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length -1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            increaseIndex()
        }, 2500)
    })

    return (
        <div className={`"carouselWrapper" ${darkMode ? "carouselWrapper carouselWrapperDark" : "carouselWrapper"}`} onMouseEnter={() => {setAutoPlay(false);clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
            
            <div className="carousel">
                {images && <div className="imagesList">     
                    {images.map((img, i) => {
                            return (   
                                <div key={i} className={i === currentIndex ? "carouselItem activeImg" : "carouselItem"}>
                                    <img src={img.Image} alt={img.Caption} />
                                    {img.Caption && <div className="caption"><span>{img.Caption}</span></div>}
                                </div>
                            )
                    })}
                    <a className="prev" onClick={decreaseIndex}><span className="material-symbols-outlined" style={{transform: "scaleX(-1)"}}>arrow_forward_ios</span></a>
                    <a className="next" onClick={increaseIndex}><span className="material-symbols-outlined">arrow_forward_ios</span></a>
                </div>}
            </div>
            <div className="dots">
                {images && images.map((image,i) => (
                    <span key={i} className={`${i === currentIndex ? "dot activeDot" : "dot"}`} onClick={() => setCurrentIndex(i)}></span>
                ))}
            </div>
        </div>
    )
}

export default Carousel;