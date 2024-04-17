import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../util/constants";
import { usePageMeta } from "../../util/util";
import EmbedPlayer from "./embed";
import DOMPurify from "dompurify";

const URL = config.blog_api

function Article(props) {
    let params = useParams();
    const [article, setArticle] = useState({});
    
    const id = params.id;
    let title = params.title;
    const htmlTitle = title + " | crate.digital";

    useEffect(() => {
        fetch(`${URL}/articles/${id}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((result) => {
            if (result.error) {
                console.log('Error: ', result.error);
                return false;
            }
            setArticle(result);
        });
    }, [id]);
    
    title = article.title;
    const date = article.updated_date > article.created_date ? `Updated: ${article.updated_date}` : `Created: ${article.created_date}`
    const author = article.author_name;
    const cover = article.cover_img;
    const body = article.article_body;// Find new way to parse html text properly

    const html = DOMPurify.sanitize(body, { ALLOWED_TAGS: ['p']})
    
    const regex = /(<([^>]+)>)/gi;
    const result = html.replace(regex, "").trim();
    const description = result.split(' ').slice(0,50).join(' ');
    usePageMeta(htmlTitle, description);
    
    return(
        <div id="article-body" className="body container is-halfheight">
            <h1 className="is-hidden">{htmlTitle}</h1>
	    <section className="hero art-hero">
                <div className="hero-body article-header">
                    <div className="columns is-multiline">
                        <div className="column is-one-half">
                            <div className="card" style={{width: '300px', height: '300px'}}>
                                <img src={cover} alt=""/>
                            </div>
                        </div>
                        <div className="column is-one-half" style={{flexDirection: 'column'}}>
                            <p id="article-title" className="title is-spaced">{title}</p>
                            <p id="article-author" className="subtitle">{author}</p>
                            <time id="article-date" dateTime="">{date}</time>
                        </div>
                    </div>
                </div>
            </section>
            <section className="article-body">
                <div className="player-wrapper">
                    <EmbedPlayer article={article.player}/>
                </div>
                <article className="media" style={{color: 'white', whiteSpace: 'pre-wrap'}}>
                    <div dangerouslySetInnerHTML={{__html: html}}>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Article;
