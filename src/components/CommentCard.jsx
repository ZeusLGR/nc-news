import * as api from '../utils/api'
import { useEffect, useState } from 'react';
import moment from 'moment';
moment().format();


export default function CommentCard({comment}) {

    const [users, setUsers] = useState([]);
    const [userAvatar, setUserAvatar] = useState("")

    useEffect(() => {
        api.fetchUsers()
        .then((data) => {
            setUsers(data.users);
            return users.filter((user) => {
                if(user.username === comment.author) {
                    return user
                }
            })
        })
        .then((avatar) => {
            
            setUserAvatar(avatar[0].avatar_url);
        })
    }, [])


   const datePosted = moment(`${comment.created_at}`).startOf('day').fromNow();

    return (
        <div className='comment_card'>
          
        <span className="field1">
          <span className='avatar_container'> <img className='user_avatar' src={userAvatar} alt="user_avatar"/> </span>
          <span className="comment_posted_by">{comment.author} </span>
          <span className="comment_date_posted">• {datePosted}</span>
        </span>

        <p className="comment_body">{comment.body}</p>
        </div>
    )

}