import { useContext, useEffect, useState } from "react";
import {BibtexParser} from "bibtex-js-parser";
import { ThemeContext } from "../context/ThemeContext";

import Article from "../assets/Article";

const PublicationList = (Publications) => {

    const { darkMode } = useContext(ThemeContext);
    
    /* S */
    const [temp, setTemp] = useState("");

    useEffect(() => {
        Publications && setTemp(BibtexParser.parseToJSON(Publications.Publications));
    }, [Publications])

    temp && temp.sort(function(a, b) {
        return b.year - a.year;
    });

    return (
        <div className={`publicationListWrapper ${darkMode ? "publicationListWrapperDark" : ""}`}>
            <div className="articlesListWrraper">
                
                {temp && temp.map((article) => {
                    return (
                        <div className="articleItem">
                            <span className="articleTitle">{<Article color={`${darkMode ? "white" : "black"}`}/>}{article.title}</span>
                            <span className="articleAuthor">
                                {article.author.split(" and ").map((author,i) => {
                                    return (
                                        <span className="authorName">
                                            <span>{author.split(", ")[1]}</span>
                                            &nbsp;
                                            <span>{author.split(", ")[0]}</span>
                                            {i<article.author.split(" and ").length -1 && ","}
                                        </span>
                                    );
                                })}
                            </span>
                            <span>{article.journal && (`${article.journal}  -  `)}{article.year}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PublicationList;