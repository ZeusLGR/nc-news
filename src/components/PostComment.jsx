import ErrorComponent from "./ErrorComponent";
import { useState } from "react"
import * as api from '../utils/api'
import { useParams } from "react-router-dom";


export default function PostComment() {

    const [commentText, setCommentText] = useState(""); 
    const [currentUser, setCurrentUser] = useState("grumpy19");
    const [error, setError] = useState(null);
    const {article_id} = useParams();

    function handleCommentText(e) {
        setCommentText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const postRequest = {
            username: currentUser,
            body: commentText
        };
        api.postComment(article_id, postRequest).then(() => {
            setCommentText("Your comment post was successful!")
        })
        .catch((err) => {
            setError({err});
        })

    }

    function changeCommentButtonStyle() {
        return (commentText ? "comments-button-enabled" : "comments-button-disabled");
    }

    if (error) {
        return <ErrorComponent message={error.err.response.data.msg}/>
    }    

    return (
       <form className="post_comment_box" onSubmit={  handleSubmit}>
        <input value={commentText} onChange={handleCommentText} type="text" 
          placeholder="What do you think?" className="comment_input"/>

        <button type="submit" className="post_comment_button" id={changeCommentButtonStyle()} disabled={!commentText}>Comment</button>

       </form>
    )

}