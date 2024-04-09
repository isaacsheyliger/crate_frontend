import React from "react";
import { useLocation } from "react-router-dom";
import EmbedPlayer from "./embed";
import DOMPurify from "dompurify";

function Article(props) {

    const location = useLocation();
    const article = location.state;
    const title = article.article.title;
    const date = article.article.updated_date > article.article.created_date ? `Updated: ${article.article.updated_date}` : `Created: ${article.article.created_date}`
    const author = article.article.author_name;
    const cover = article.article.cover_img;
    const body = article.article.article_body;// Find new way to parse html text properly

    const html = DOMPurify.sanitize(body, { ALLOWED_TAGS: ['p']})

    return(
        <div id="article-body" className="body container is-halfheight">
            <section className="hero art-hero">
                <div className="hero-body article-header">
                    <div className="columns is-multiline">
                        <div className="column is-one-half">
                            <div className="card" style={{width: '300px', height: '300px'}}>
                                <img src={`https://heyligerjon.github.io/crate_frontend/static/img/covers/${cover}`} alt=""/>
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
                    <EmbedPlayer article={article.article}/>
                </div>
                <article className="media" style={{color: 'white', whiteSpace: 'pre-wrap'}}>
                    <div dangerouslySetInnerHTML={{__html: html}}>
                        {/* {html} */}
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Article;