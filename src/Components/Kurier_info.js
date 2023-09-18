import './Kurier_info.css'
import Karta from "./karta";
import KartaAnim from "./kartaAnim";
import Statistika from "./Statistika";
import Hisobkitob from "./Hisobkitob";
import Arxiv from "./Arxiv";
import {useState} from "react";
const K_info = ()=>{

    const [tab,setTab] = useState(1)

    return(
        <>
            <div className="kurier2">
                <img src={require('../Icons/Ellipse 6.png')} alt=""/>
                <h2>Fazliddin Nasruddinov</h2>
                <button>Ma'lumotlarni o'zgartirish</button>
            </div>
            <div className="nav">
            <ul>
                <li onClick={()=>{setTab(tab=>1)}} className={tab==1?'active':""}>Statistika</li>
                <li onClick={()=>{setTab(tab=>2)}} className={tab==2?'active':""}>Hisob kitob</li>
                <li onClick={()=>{setTab(tab=>3)}} className={tab==3?'active':""}>Arxiv</li>
            </ul>
            </div>
            <div id="nav-bar">
                {
                    tab == 1 &&
                    <div className="stastistika">
                        <Statistika/>
                    </div>
                }
                {
                    tab == 2 &&
                    <div className="hisobkitob">
                        <Hisobkitob/>
                    </div>
                }
                {
                    tab == 3 &&
                    <div className="arxiv">
                        <Arxiv/>
                    </div>
                }

            </div>
        </>
    )
}

export default K_info