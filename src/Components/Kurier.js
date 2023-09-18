import './kurier.css'
import Kurier from "./Kurierlar_item.css"
import Headers from "./Headers";
import Kurierlar_item from "./kurierlar_item";
import Poisk from "./Poiskovik";

const kurier = ()=>{
    return(
        <>
            <Headers text = "Kurierlar"/>
            <Poisk/>
            <div id="kurier2">
                    <Kurierlar_item/>
                <Kurierlar_item/>
                <Kurierlar_item/>
                <Kurierlar_item/>
                <Kurierlar_item/>
                <Kurierlar_item/>
                <Kurierlar_item/>
            </div>
        </>
    )
}

export default kurier