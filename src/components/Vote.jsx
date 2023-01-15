import ErrorComponent from "./ErrorComponent";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'

export default function Vote({votes}) {

const [voteChange, setVotechange] = useState(0);
const {article_id} = useParams();
const [error, setError] = useState(null);

function vote(update) {
        setVotechange((currVoteChange) => currVoteChange + update);
        const voteUpdate = {
            inc_votes: update
        }
        api.patchArticleVotes(article_id, voteUpdate).catch((err) => {
            setVotechange((currVoteChange) => currVoteChange - update);
            setError({err});
        })
    }

if (error) {
    return <ErrorComponent message={error.err.response.data.msg}/>
}    

return (
        <div className="vote_component">
            
            <button className="vote_article_button" onClick={() => {
                vote(1)}} aria-label="like article"><FaRegArrowAltCircleUp/></button>

            <p className="votes_text">{votes + voteChange} Likes</p>

            <button className="vote_article_button" onClick={() => {
                vote(-1)}} aria-label="dislike article"><FaRegArrowAltCircleDown/></button>
        </div>
            
)
}