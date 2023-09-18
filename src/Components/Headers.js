import './Headers.css'
import {hydrateRoot} from "react-dom/client";

const Head = (props)=>{
    return(
        <>
            <div className="Head">
                <p>{props.text}</p>
                <div className="head">
                <button >Pdf file yuklash</button>
                <button >Xml file yuklash</button>
                    <img id="img" src={require('../Icons/Opovesheniye.png')} />
                </div>
            </div>

        </>

    )
}

export default Head