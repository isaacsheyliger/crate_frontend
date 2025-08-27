import React, { useState, useEffect } from "react";
import { config } from '../../util/constants';
import { useWindowSize, usePageMeta } from "../../util/util";
import AlbumCard from "./albumcard";

const URL = config.blog_api

function ArchiveList(props) {
    const size = useWindowSize();
    const [articles, setArticles] = useState([]);

    const FetchArticle = () => {
	fetch(`${URL}/articles/?limit=50`, {
            method: 'GET',
        })
	.then(response => response.json())
	.then((data) => {
	    if (data.error) {
  	        console.log('Error: ', data.error);
		return false;
	    }
	    setArticles(data.results);
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
        articleList = articles.map((article, index) => 
            <div key={index} className="columns is-multiline">
                <AlbumCard key={article.id} article={article} orientation="horizontal" width={200}/>
            </div>
        );
    } else {
        articleList = articles.map((article, index) => 
            <div key={index} className={`column`} style={{transform: 'translate(0px)'}}>
                <AlbumCard key={article.id} article={article} orientation="card" width={200}/>
            </div>
        );
    }
    
    return(
         <div id="archive-body" className="body archive-body">
            <section className="hero archive-hero is-fullheight">
                <h1>&lt;archive&gt;</h1>
                {articleList}
            </section>
         </div>
    )
}

export default ArchiveList;
