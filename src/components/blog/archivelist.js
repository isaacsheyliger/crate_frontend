import React, { useState, useEffect } from "react";
import { config } from '../../util/constants';
import { useWindowSize, usePageMeta } from "../../util/util";
import AlbumCard from "./albumcard";

const URL = config.blog_api

function ArchiveList(props) {
    const size = useWindowSize();
    const [articles, setArticles] = useState([]);

    // TODO: replace article fetch with json data from file for static page
    const FetchArticle = () => {
	fetch(`${URL}/articles/`, {
            method: 'GET',
        })
	.then(response => response.json())
	.then((result) => {
	    if (result.error) {
  	        console.log('Error: ', result.error);
		return false;
	    }
	    setArticles(result);
	});
    };

    useEffect(() => {
        FetchArticle();
    }, []);

    const title = "Archive | crate.digital";
    var description = "";
    function getDescription(item, index, arr) {
        let order = index+1
        description += `${order}. ${item.title}\n`
    }
    articles.forEach(getDescription);
    usePageMeta(title, description);

    var articleList;

    if (size[0] > 768) {
        articleList = articles.map(article => 
            <AlbumCard key={article.id} article={article} orientation="horizontal" width={200}/>
        );
    } else {
        articleList = articles.map(article => 
            <AlbumCard key={article.id} article={article} orientation="card" width={200}/>
        );
    }
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
