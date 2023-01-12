import { useState } from "react"

export default function ErrorComponent({message}) {

const [errorMessage, setErrorMessage] = useState(message);

    if(errorMessage === "Bad request") {
        setErrorMessage("Sorry, something went wrong with your request. Please refresh the page and try again")
    }

return ( 
    <p className="error">
        {errorMessage}
    </p>
)

    
    
}