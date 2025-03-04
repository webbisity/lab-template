import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";

import '../CSS/Contact.css';

const Contact = () => {

    const { darkMode } = useContext(ThemeContext);
    const { contact } = useContext(DBContext);
    console.log(JSON.stringify(contact));

    return (
        <div className={`contactWrraper ${darkMode ? "contactWrraperDark" : ""}`}>
            <div className="contactInfo">
                {contact && <div className="info">
                    <h1>Contact</h1>
                    <span>{contact[0].lab_name}</span>
                    <span>{contact[0].institution}</span>
                    <span>{contact[0].address}</span>
                    <span>Email: {contact[0].email}</span>
                    <span>Tel: {contact[0].phone}</span>
                    <span>Fax: {contact[0].fax}</span>
                    <br />
                </div>}
            </div>
        </div>
    )
}
export default Contact;