import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from '../utils/api'


export default function CommentsList() {

    const {article_id} = useParams();
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchArticleComments(article_id).then((data) => {
            setCommentsList(data.comments)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
      return <p>Loading...</p>;
  }

    return (
        <div className="container">
          {commentsList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
          })}
        </div>
    )
}