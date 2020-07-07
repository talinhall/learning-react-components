import React from 'react';


//props is a javascript oject that contains all infromatin passed down
//from the parent
const CommentDetail = (props) => {
    return(
        <div className = "comment">
                {/* this is a jsx comment below is anchor tag with with 
                link that takes you nowhere */}
                <a href="/" className = "avatar" >
                    <img alt="avatar" src={props.avatar}/>
                </a> 
                <div className= "content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className= "metadata">
                        <span className = "data"> {props.timeAgo}</span>
                    </div>
                    <div className= "text">{props.commentText}</div>
                </div>
        </div>
    );
};

//this allows thie file to be avaibale for other files to import

export default CommentDetail;