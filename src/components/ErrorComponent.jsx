

export default function ErrorComponent({message}) {



   

return ( 
    <p className="error">
        {message ? "Sorry, something went wrong with your request. Please refresh the page and try again" : "404,not found"}
    </p>
)

    
    
}