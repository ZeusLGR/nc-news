import UserInfo from "./UserInfo";
import newsLogo from "/Users/lee/northcoders/frontend/nc-news/src/images/NCNews.png"


export default function Header() {
    return (
        <header className="header">
            <img src={newsLogo} className="header_logo"></img>
        </header>
    )
    
}