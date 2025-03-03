import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import '../CSS/Contact.css';
import { Link } from "react-router-dom";

const Contact = () => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`contactWrraper ${darkMode ? "contactWrraperDark" : ""}`}>
            <div className="contactInfo">
                <img src="https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg" alt="" />
                <div className="info">
                    <h1>Contact</h1>
                    <span>School of Zoology, Faculty of Life  Sciences</span>
                    <span>Tel-Aviv University</span>
                    <span>Ramat-Aviv, Tel-Aviv, 6997801 ISRAEL</span>
                    <span>Email: ayali@post.tau.ac.il</span>
                    <span>Tel: 972-3-6409820</span>
                    <span>Fax: 972-3-6409403</span>
                    <br />
                    <span>Office: Sherman Bldg, Room 410</span>
                </div>
            </div>
            <div className="institutions">
                {/* <img src="https://static.wixstatic.com/media/56112d_aa1957bcb64a444985fac0e07428e3a3~mv2.png/v1/fill/w_168,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Picture1.png" alt="" /> */}
                <img src='https://www.aftau.org/wp-content/uploads/2020/07/Wise.png'></img>
                <img src='https://www.tau.ac.il/~idotavor/main/home/sagol-logo-144.png'></img>
                <br />
                <img src='https://belmaker.weebly.com/uploads/1/2/7/5/12753097/published/zoologo.png?1518336373'></img>
                {/* <img src="https://static.wixstatic.com/media/56112d_e22b3372ced44573b39ac1eea4b78d73~mv2.png/v1/fill/w_174,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Picture2.png" alt="" /> */}
                {/* <img src="https://static.wixstatic.com/media/56112d_e7d3896cd4a8425491e9567b3d991002~mv2.png/v1/fill/w_157,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Picture3.png" alt="" /> */}
            </div>
        </div>
    )
}
export default Contact;