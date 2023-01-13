import newsLogo from "../images/NCNews.png"


export default function Header() {
    return (
        <header className="header">
            <img src={newsLogo} alt="NC News logo" className="header_logo"></img>
        </header>
    )
    
}