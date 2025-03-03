import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const OpenPosition = ({position}) => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`positionWrapper ${darkMode ? "positionWrapperDark" : ""}`}>
                <div className="positionInfo">
                    <div className="positionTitle">{position.Title}</div>
                </div>
                <div className="positionDetails">
                    <ul>
                        <li style={{ opacity: position.Type ? '1' : '0', userSelect: position.Type ? "" : "none" }}><b>Type:</b> {position.Type}</li>
                        <li style={{ opacity: position.Start_Date ? '1' : '0', userSelect: position.Start_Date ? "" : "none" }}><b>Start date:</b> {position.Start_Date}</li>
                        <li style={{ opacity: position.Duration ? '1' : '0', userSelect: position.Duration ? "" : "none" }}><b >Duration:</b> {position.Duration}</li>
                    </ul>
                </div>
                <div className="seperator"></div>
                <div className="positionDesciption">
                    <span>{position.Description}</span>
                </div>
        </div>
    )
}

export default OpenPosition;