import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ResearchItem = ({research}) => {

    const { darkMode } = useContext(ThemeContext);

    const [items, setItems] = useState(1);
    useEffect(() => {
        if(research.Image_3 || research.Caption_3) {
            setItems(3);
        } else if(research.Image_2 || research.Caption_2) {
            setItems(2);
        } else {
            setItems(1);
        }
    },[research])

    const [currentItem, setCurrentItem] = useState(1);
    const increaseIndex = () => {
        if (currentItem === (items)) {
            setCurrentItem(1);
        } else {
            setCurrentItem(currentItem + 1);
        }
    }

    const decreaseIndex = () => {
        if (currentItem === 1) {
            setCurrentItem(items);
        } else {
            setCurrentItem(currentItem - 1);
        }
    }


    return (

        <div className={`itemWrapper ${darkMode ? "dark" : "light"}`}>
            <span className="itemCounter">{currentItem}/{items}</span>
            <a className="prevItem" onClick={decreaseIndex}><span className="material-symbols-outlined" style={{transform: "scaleX(-1)"}}>arrow_forward_ios</span></a>
            <a className="nextItem" onClick={increaseIndex}><span className="material-symbols-outlined">arrow_forward_ios</span></a>
            <div className={`listItem ${currentItem === 1 ? "" : "noteActive"}`}>                
                <div className="itemImage">
                    <img src={research.Image_1 ? research.Image_1 : "https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg"} alt="" />
                </div>
                <div className="itemContent">
                    <span className="title">{research.Title}</span>
                    <br />
                    <div className="caption">
                        {(JSON.stringify(research.Caption_1).slice(1, -1)).split('\\n\\n').slice().map((p) => {
                            return (
                                <>
                                    <p>{p}</p>
                                    <br/>
                                </>
                                
                            )
                        })}
                    </div>
                    {/* <span className="caption">{research.Caption_1}</span> */}
                </div>
            </div>
            
            {(research.Image_2 || research.Caption_2) && <div className={`listItem ${currentItem === 2 ? "" : "noteActive"}`}>
                {research.Image_2 && 
                    <div className="itemImage">
                        <img src={research.Image_2 ? research.Image_2 : "https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg"} alt="" />
                    </div>}
                <div className="itemContent">
                    <span className="title">{research.Title}</span>
                    <br />
                    <span className="caption">{research.Caption_2}</span>
                </div>
            </div>}

            {(research.Image_3 || research.Caption_3) && <div className={`listItem ${currentItem === 3 ? "" : "noteActive"}`}>
                {research.Image_3 && 
                    <div className="itemImage">
                        <img src={research.Image_3 ? research.Image_3 : "https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg"} alt="" />
                    </div>}
                <div className="itemContent">
                    <span className="title">{research.Title}</span>
                    <br />
                    <span className="caption">{research.Caption_3}</span>
                </div>
            </div>}    
        </div>
    )
}

export default ResearchItem;