import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'

export default function Vote({votes}) {

const [voteChange, setVotechange] = useState(0)
const {article_id} = useParams()

function vote(update) {
        setVotechange((currVoteChange) => currVoteChange + 1);
        const voteUpdate = {
            inc_votes: update
        }
        api.patchArticleVotes(article_id, voteUpdate)
    }

return (
            <span className="vote_component">
            <span>
            <button className="vote_article_button" onClick={() => {
                vote(1)
            }}><FaRegArrowAltCircleUp/></button></span>
            <span className="votes_text">{votes + voteChange} Votes</span>
            <span><button className="vote_article_button" onClick={() => {vote(-1)}}><FaRegArrowAltCircleDown/></button></span>
            </span>
            
            )
}