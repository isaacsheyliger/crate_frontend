import React, { useState, useEffect } from "react";
import { config } from '../../const/constants'
import AlbumCard from "./albumcard";
import article_data from './album-data.json'

const URL = config.blog_api

function ArchiveList(props) {
    const [articles, setArticles] = useState([]);

    // TODO: replace article fetch with json data from file for static page
    const FetchArticle = () => {
        setArticles(article_data);
    };

    useEffect(() => {
        FetchArticle();
    }, []);

    const articleList = articles.map(article => 
        <AlbumCard key={article.id} article={article} orientation="vertical" width="200"/>
    );
    // retrieve list of all articles, sort, return list items
    return(
         <div id="archive-body" className="body archive-body">
            <section className="hero archive-hero is-fullheight">
                <h1>&lt;archive&gt;</h1>
                <div className="columns is-multiline">
                    {articleList}
                </div>
            </section>
         </div>
    )
}

export default ArchiveList;
