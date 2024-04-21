import React from "react";
import DOMPurify from "dompurify";

function EmbedPlayer({ className=null, article=null }) {
    var player = null;

    if(article) {
        const html = DOMPurify.sanitize(article, { ALLOWED_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen'] })
        player = html
    } 
    else{
        player = '<iframe title="Main Player" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/78Km0gFpWkDLNLkKdW52JG?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    }
    return(
        <div className={className + " embed-player"} dangerouslySetInnerHTML={{__html: player}}>
        </div>
    )
}

export default EmbedPlayer;
