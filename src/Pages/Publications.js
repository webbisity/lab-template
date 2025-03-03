import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { useContext } from "react";

import "../CSS/Publications.css"
import PublicationList from "../components/PublicationList";

const Publications = () => {

    const { darkMode } = useContext(ThemeContext);
    const { publications } = useContext(DBContext);
    
    return (
        <div className="publicationsWrapper">
            <span className="publicationsTitle">Selected publications</span>
            <div className={`publicationList ${darkMode ? "publicationListDark" : ""}`}>
                {publications && <PublicationList Publications={publications}/>}
            </div>
        </div>
    )
}

export default Publications;