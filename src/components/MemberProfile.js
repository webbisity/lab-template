import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BibtexParser } from "bibtex-js-parser";
import { ThemeContext } from '../context/ThemeContext';
import { DBContext } from '../context/DBContext';

import Github from "../assets/Github";
import Scholar from "../assets/Scholar";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import ORCID from "../assets/ORCID";
import Personal from "../assets/Personal";
import PublicationList from "./PublicationList";
import Back from '../assets/Back';

import '../CSS/MemberProfile.css'

const MemberProfile = () => {

    const { darkMode } = useContext(ThemeContext);

    const [svgColor, setSvgColor] = useState("");
    useEffect(() => {
        if (darkMode) {
            setSvgColor("rgb(187 222 251)");
        } else {
            setSvgColor("#1B4F72");
        }
    }, [darkMode])

    const {members} = useContext(DBContext);
    const [member, setMember] = useState();

    const { name } = useParams();

    useEffect(() => {
        members && setMember(members.find(item => item.Name === name.replace("-", " ")));
    },[members]);

    return(
        <div className="memberWrapper">
            <Link className="back" to={"/members"}><Back color={svgColor}/><span>See all members</span></Link>
            {member &&
            <>
                <div className="profile">
                    <div className="profileCard">
                        <img src={`${member.Photo ? member.Photo : "https://lh3.googleusercontent.com/pw/AIL4fc8x8n1vKAjGs6h_kFGzmwPF5b9eGTPIrASNiHrkH3pAl8I2Zk0q9kFUaE82WAeSyQGUXYDBe5DRqw6hV5D5Em0VPZo18_i8O1zsbKW9a4SzCTBpUNHJRFhg8Gm3THwVREJVl-vPTQRCvBAdrYi_V4Zx=w423-h423-s-no?authuser=0"}`} alt="" />
                        <div className="name">{`${member.Title === "Professor" ? "Prof." : member.Title === "Doctor" ? "Dr." : ""} ${member.Name}`}</div>
                        <br/>
                        <div className="role">{member.Role}</div>
                        <div className="shortSummary">{member.Short_Summary}</div>
                        <br/>
                        <div className="socials">
                            {member.Email.length !== 0 && <Link to={member.Email} target="_blank"><Email color={svgColor}/></Link>}
                            {member.Scholar.length !== 0 && <Link to={member.Scholar} target="_blank"><Scholar color={svgColor}/></Link>}
                            {member.Linkedin.length !== 0 && <Link to={member.Linkedin} target="_blank"><Linkedin color={svgColor}/></Link>}
                            {member.ORCID.length !== 0 && <Link to={member.ORCID} target="_blank"><ORCID color={svgColor}/></Link>}
                            {member.GitHub.length !== 0 && <Link to={member.GitHub} target="_blank"><Github color={svgColor}/></Link>}
                            {member.Personal_Page.length !== 0 && <Link to={member.Personal_Page} target="_blank"><Personal color={svgColor}/></Link>}
                        </div>
                    </div>
                    
                    <div className="profileContent">
                        {console.log("1: " + JSON.stringify(member.Long_Summary))}
                        <div className="info">
                            {(JSON.stringify(member.Long_Summary).slice(1, -1)).split('\\n\\n').slice().map((p) => {
                                return (
                                    <>
                                        <p>{p}</p>
                                        <br/>
                                    </>
                                    
                                )
                            })}
                        </div>
                        
                        {member.Email && <div className="contact">
                            <h1>Contact details</h1>
                            <ul>
                                {member.Email && <li><span>Email: </span>{member.Email}</li>}
                            </ul>
                        </div>}

                        <div className="CV">
                            {member.Interests && <div className="interests">
                                <p>Interests</p>
                                <ul>
                                    {(member.Interests.split(";")).map((x) => {
                                        return (
                                            <li><span class="material-symbols-outlined interestsIcon">cognition</span>{x}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            {member.Education && <div className="education">
                                <p>Education</p>
                                <ul>
                                    {member.Education.match(/\[[^\]]*\]/g).map((education) => {
                                        return (
                                            <li>
                                                <span className="material-symbols-outlined educationIcon">school</span>
                                                <span className='educationIcon'>
                                                    {education.slice(1, -1).split(";").map((p,i) => {                                                
                                                        if (i === 0) {
                                                            return (
                                                                <span style={{display: 'block'}}>{p}</span>
                                                            )
                                                        } else {
                                                            return (
                                                                <span style={{color: '#b2b2b2', display:'block'}}>{p}</span>
                                                            )
                                                        }
                                                    })}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>

                {member.Publications && <div className="publish">
                    <h1>Latest</h1>    
                    {member.Publications && <PublicationList Publications={member.Publications}/>}      
                </div>}
            </>
            }
        </div>
    )
}

export default MemberProfile;