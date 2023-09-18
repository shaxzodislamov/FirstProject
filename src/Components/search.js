import './search.css'
const search = (props)=>{
    return(
        <>
            <div className="search">
                <input type="text" placeholder={props.text}/>    <button>{props.text}</button>
            </div>
            <hr/>
        </>
    )
}

export default search