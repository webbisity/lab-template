import { useContext } from 'react';
import { Link } from "react-router-dom";

import { ThemeContext } from '../context/ThemeContext';
import { DBContext } from '../context/DBContext';

import '../CSS/ReserchList.css';

const ResearchList = () => {

    const {darkMode} = useContext(ThemeContext);
    const {researches} = useContext(DBContext);

    return (
        <div className="reserchListWrapper">
            {researches && researches.map((research,i) => {
                return (
                    <Link to={`${i}`}>
                        <div className={`${darkMode ? "listItem listItemDark" : "listItem"}`}>
                            <img src={research.Image1 ? research.Image1 : "https://lh3.googleusercontent.com/pw/AIL4fc8x8n1vKAjGs6h_kFGzmwPF5b9eGTPIrASNiHrkH3pAl8I2Zk0q9kFUaE82WAeSyQGUXYDBe5DRqw6hV5D5Em0VPZo18_i8O1zsbKW9a4SzCTBpUNHJRFhg8Gm3THwVREJVl-vPTQRCvBAdrYi_V4Zx=w423-h423-s-no?authuser=0"} alt="" />
                            <div className="text">
                                <h1>{research.Title}</h1>
                                <p>{research.Caption1}</p>

                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ResearchList;
/* 
<Link to={`${i}`}>
    <div className={`${darkMode ? "listItem listItemDark" : "listItem"}`}>
        <div className="reserchImg">
            <img src={reserch.Image ? reserch.Image : "https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg"} alt="" />
        </div>
        <div className="reserchPreviewContent">
            <span className="title">{reserch.Title}</span>
            {reserch.Topic && <span className="topic">{reserch.Topic}</span>}
            <br />
            <span className="caption">{reserch.Caption}</span>
        </div>
    </div>
</Link> */