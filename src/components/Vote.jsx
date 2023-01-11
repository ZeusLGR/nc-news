import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'

export default function Vote({votes}) {

const [voteChange, setVotechange] = useState(0)


function incVote() {
        setVotechange((currVoteChange) => currVoteChange + 1);
        
    }
function decVote() {
    setVotechange((currVoteChange) => currVoteChange - 1);
}    

return (
            <span className="vote_component">
            <span>
            <button className="vote_article_button" onClick={incVote}><FaRegArrowAltCircleUp/></button></span>
            <span className="votes_text">{votes + voteChange} Votes</span>
            <span><button className="vote_article_button" onClick={decVote}><FaRegArrowAltCircleDown/></button></span>
            </span>
            
            )
}