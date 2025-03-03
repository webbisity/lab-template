import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { Link } from "react-router-dom";
import Github from "../assets/Github";
import Scholar from "../assets/Scholar";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import ORCID from "../assets/ORCID";
import Personal from "../assets/Personal";

const MembersList = () => {

    const {darkMode} = useContext(ThemeContext);
    const { members } = useContext(DBContext);

    const [inputValue, setInputValue] = useState("");
    const [RoleValue, setRoleValue] = useState("");
    const [activeValue, setActiveValue] = useState("");

    const [svgColor, setSvgColor] = useState("");

    useEffect(() => {
        if (darkMode) {
            setSvgColor("rgb(187 222 251)");
        } else {
            setSvgColor("#1B4F72");
        }
    }, [darkMode])

    const updateInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const setRole = (event) => {
        setRoleValue(event.target.value);
    };
    
    const setActiveTime = (event) => {
        setActiveValue(event.target.value);
    };


    return (
        <div className="membersWrapper">
            <div className="membersTitle">Lab members (Present and Past)</div>

            <div className="search">
                <div className='searchBar'><input type='text' placeholder='Search member...' onChange={updateInputValue}></input></div>
                <div className="searchRole">
                    <select onChange={setRole}>
                        <option value="">Chose Role</option>
                        <option value="Principal investigator">Principal investigator</option>
                        <option value="Lab manager">Lab manager</option>
                        <option value="Post-doctoral researcher">Post-doctoral researcher</option>
                        <option value="PhD student">PhD student</option>
                        <option value="M.Sc. student">M.Sc. student</option>
                        <option value="Project student">Project student</option>
                    </select>
                </div>
                <div className="searchActive">
                    <select onChange={setActiveTime}>
                        <option value="">All time</option>
                        <option value="Yes">Present</option>
                        <option value="No">Past</option>
                    </select>
                </div>
            </div>
                
            <div className='membersList'>
                {members && members.map((member, i) => {
                    return (
                        (member.Name.toLowerCase().includes(inputValue.toLowerCase()) && (RoleValue === "" || member.Role === RoleValue) && (activeValue === "" || ((activeValue === "Yes" && member.End_Year === "Current") || (activeValue === "No" && member.End_Year !== "Current")))) &&
                        <div className={`${darkMode ? "memberItem memberItemDark" : "memberItem"}`}>
                            <div className='img'><img src={`${member.Photo ? member.Photo : "https://lh3.googleusercontent.com/pw/AIL4fc8x8n1vKAjGs6h_kFGzmwPF5b9eGTPIrASNiHrkH3pAl8I2Zk0q9kFUaE82WAeSyQGUXYDBe5DRqw6hV5D5Em0VPZo18_i8O1zsbKW9a4SzCTBpUNHJRFhg8Gm3THwVREJVl-vPTQRCvBAdrYi_V4Zx=w423-h423-s-no?authuser=0"}`} alt="" /></div>
                            <div className="content">
                                {/* <span className='name'>{member.Name}<p>&nbsp;{` (${member.Start_Year} - ${member.End_Year})`}</p></span> */}
                                <Link to={`profile/${member.Name.replace(" ", "-")}`}><div className={`${darkMode ? "name nameDark" : "name"}`}><span>{`${member.Title === "Professor" ? "Prof." : member.Title === "Doctor" ? "Dr." : ""}`} <span>{member.Name}</span></span>{(member.Start_Year || member.End_Year) && <span>{` (${member.Start_Year && member.Start_Year}${((member.Start_Year && member.End_Year) && " - ")}${member.End_Year})`}</span>}</div></Link>
                                <span className='info'>
                                    <div className="role">{member.Role}</div>
                                    &nbsp;
                                    <div className="socials">
                                        {member.Email.length !== 0 && <Link to={member.Email} target="_blank"><Email color={svgColor}/></Link>}
                                        {member.Scholar.length !== 0 && <Link to={member.Scholar} target="_blank"><Scholar color={svgColor}/></Link>}
                                        {member.Linkedin.length !== 0 && <Link to={member.Linkedin} target="_blank"><Linkedin color={svgColor}/></Link>}
                                        {member.ORCID.length !== 0 && <Link to={member.ORCID} target="_blank"><ORCID color={svgColor}/></Link>}
                                        {member.GitHub.length !== 0 && <Link to={member.GitHub} target="_blank"><Github color={svgColor}/></Link>}
                                        {member.Personal_Page.length !== 0 && <Link to={member.Personal_Page} target="_blank"><Personal color={svgColor}/></Link>}
                                    </div>
                                </span>  
                                <div className="interest">
                                <b style={{ opacity: member.Interests ? '1' : '0', userSelect: member.Interests ? "" : "none" }}>Interest: <>&nbsp;</></b> 
                                    {member.Interests && member.Interests.split(";").map((interest,i) => {
                                        return (
                                            <span>{`${interest}`}{`${member.Interests.split(";").length === i+1 ? "" : ","}`}&nbsp;</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <Link className={`goto ${darkMode ? "gotoDark" : ""}`} to={`profile/${member.Name.replace(" ", "-")}`}><span className="material-symbols-outlined">arrow_forward_ios</span></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MembersList;