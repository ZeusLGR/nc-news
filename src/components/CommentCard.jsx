import * as api from '../utils/api'
import { useEffect, useState } from 'react';
import moment from 'moment';
moment.utc().format();

export default function CommentCard({comment, setCommentsList}) {

    const [userAvatar, setUserAvatar] = useState("");
    const [commentToDelete, setCommentToDelete] = useState("");

    useEffect(() => {
        api.fetchUsers()
        .then((data) => {
            return data.users.forEach((user) => {
                if(user.username === comment.author) {
                    setUserAvatar(user.avatar_url);
                }
            })
        })
    }, [comment.author])

    useEffect(() => {
        setCommentsList((currCommentsList) => {
            return currCommentsList.map((listedComment) => {
                if(listedComment.comment_id === commentToDelete) {
                    return {
                        comment_id: comment.comment_id,
                        body: "This comment has been successfully deleted",
                        article_id: comment.article_id,
                        author: comment.author,
                        votes: comment.votes,
                        created_at: comment.created_at
                        }
                }
                return listedComment
            })

        })
        api.deleteComment(commentToDelete).then(() => {})
    }, [commentToDelete])


   const datePosted = moment(`${comment.created_at}`).calendar();

   function changeCommentButtonStyle() {
    return (commentToDelete ? "delete_comment_button_disabled" : "delete_comment_button_enabled");
}

    return (
        <div className='comment_card'>
          
          <div className='avatar_container'>

            <img className='user_avatar' src={userAvatar} alt="user_avatar"/>

            <span className="comment_posted_by">{comment.author}</span>

            <span className="comment_date_posted"> •{datePosted}</span>

            <span className="delete_comment_button">
              {comment.author === "grumpy19" ? <button onClick={() => {setCommentToDelete(comment.comment_id)}} className={changeCommentButtonStyle()}disabled={commentToDelete} aria-label="delete this comment">Delete</button> : null }
            </span>
          </div>
          
        

        <p className="comment_body">{comment.body}</p>
       
        </div>
    )

}