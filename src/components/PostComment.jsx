import ErrorComponent from "./ErrorComponent";
import { useState } from "react"
import * as api from '../utils/api'
import { useParams } from "react-router-dom";


export default function PostComment({setCommentsList}) {

    const [commentText, setCommentText] = useState(""); 
    const [textToPost, setTextToPost] = useState("");
    const [currentUser, setCurrentUser] = useState("grumpy19");
    const [error, setError] = useState(null);
    const {article_id} = useParams();

    function handleCommentText(e) {
        setCommentText(e.target.value);
        setTextToPost(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCommentText("");

        const postRequest = {
            username: currentUser,
            body: textToPost
        };
        api.postComment(article_id, postRequest).then(({comment}) => {
            
            setCommentsList((currCommentsList) => {
                return [...currCommentsList, comment]
            });
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
       <form className="post_comment_box" onSubmit={handleSubmit}>
        <textarea cols="40" rows="5" value={commentText} onChange={handleCommentText} type="text" 
          placeholder="What do you think?" className="comment_input"></textarea>

        <button type="submit" name="submitButton" className="post_comment_button" id={changeCommentButtonStyle()} disabled={!commentText}>Comment</button>

       </form>
    )

}