import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Article from "./article";

function AlbumCard({ article, orientation, width }) {
    const width_px = `${width}px`
    
    const id = article.id;
    const cover = article.cover_img;
    const title = article.title;
    const author = article.author_name;
    const date = article.updated_date > article.created_date ? `Updated: ${article.updated_date}` : `Created: ${article.created_date}`
    const tagIds = article.tags;
    let tags = []
    tagIds.forEach((tag) => tags.push(`#${tag.value} `))

    let cardClass = ' media-card';
    if (orientation === 'horizontal') {
        cardClass = ` flex-row`
    }
    if (orientation === 'vertical') {
        cardClass += ` flex-col`
    }

    const urlTitle = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    return (
        <>
            {orientation === 'card' && (
                <article className={`media${cardClass}`} style={{backgroundImage: `url('${cover}')`, backgroundSize: width_px, maxWidth: width_px, width: width_px, height: width_px}}>
                    <Link to={`/articles/${id}/${urlTitle}`} state={{article: article}} element={<Article/>}>
                            <div className="card" style={{width: width_px, height: width_px}}>
                                <div className="card-content">
                                    <p className="title card-title">
                                        {title}
                                    </p>
                                    <p className="subtitle card-subtitle">
                                        {author}
                                    </p>
                                </div>
                                <footer className="card-footer">
                                    {/* <p className="card-footer-item">
                                    </p> */}
                                </footer>
                            </div>
                    </Link>
                </article>
            )}
            {orientation === 'vertical' && (
                <article className={`media${cardClass}`}>
                    <Link to={`/articles/${id}/${urlTitle}`} state={{article: article}} element={<Article/>}>
                            <div className="card" style={{backgroundImage: `url('${cover}')`, backgroundSize: width_px, maxWidth: width_px, width: width_px, height: width_px}}>
                            </div>
                            <div className="media-content">
                                <p className="title media-title">
                                    {title}
                                </p>
                                <p className="subtitle media-subtitle">
                                    {author}
                                </p>
                                {/* <p>
                                </p> */}
                                <p>
                                    {date}
                                </p>
                            </div>
                    </Link>
                </article>
            )}
	    {orientation === 'horizontal' && (
                <article className={`media${cardClass} is-justify-content-center`} style={{width: "100%"}}>
                    <Link
		    to={`/articles/${id}/${urlTitle}`}
		    className="is-flex is-flex-direction-row"
		    style={{width: "90%"}}
		    element={<Article/>}
		    >
                        <div
		     	  className="card"
		          style={{backgroundImage: `url('${cover}')`,
				  backgroundSize: width_px,
				  maxWidth: width_px,
				  width: width_px,
			  	  height: width_px}}
		   	 />
                         <div className="media-content is-flex is-flex-direction-column pl-5 py-4">
                             <p className="title media-title">
                                 {title}
                             </p>
                             <p className="subtitle media-subtitle">
                                 {author}
                             </p>
                             {/* <p>
                             </p> */}
                             <p className="mt-auto">
                                 {tags}
                             </p>
                         </div>
                    </Link>
                </article>
            )}
        </>
    )
}

AlbumCard.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author_name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        cover_img: PropTypes.string.isRequired,
        created_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        updated_date: PropTypes.string.isRequired,
        views: PropTypes.number
    }).isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical', 'card']).isRequired,
    width: PropTypes.number,
};

export default AlbumCard;
