import './App.css'
import Count from "./Components/Components";
import {useState} from "react";
import Components from "./Components/Components";
import Head from "./Components/Headers"
import Item from "./Components/Item";
import Poiskovik from "./Components/Poiskovik";
import Poisk from "./Components/Poiskovik";
import Search from "./Components/search";
import Tashkilot from "./Components/Tashkilot";
import Headers from "./Components/Headers";
import Tashkilotitem from './Components/Tashkiltoitem';

    const App = ()=>{

    const [nav,setNav] = useState(1)

        return(
            <>
                <Tashkilot/>
                <div className="navBar">
                    <div className="img">
                        <img src={require('./Icons/Logo.png')} alt=""/>
                    </div>
                    <h2>Super Admin</h2>
                    <ul>

                        <li onClick={()=>{setNav((e)=>1)}} className={nav == 1?'active1':""}><img src={ nav==1? require('./Icons/Tashkilot.png') :require('./Icons/tashkilotlogo.png')} alt=""/> <span>Tashkilotlar</span></li>
                        <li onClick={()=>{setNav((e)=>2)}} className={nav == 2?'active1':""}><img src={ nav==2? require('./Icons/kurieractivlogo.png') :require('./Icons/kurierlogo.png')} alt=""/> <span>Kurierlar</span></li>
                        <li onClick={()=>{setNav((e)=>3)}} className={nav == 3?'active1':""}><img src={ nav==3? require('./Icons/statistikaactivelogo.png') :require('./Icons/statistikalogo.png')} alt=""/><span>Statistika</span></li>
                        <li onClick={()=>{setNav((e)=>4)}} className={nav == 4?'active1':""}><img src={ nav==4? require('./Icons/tushumlaractive.png') :require('./Icons/tushumlarlogo.png')} alt=""/><span>Tushumlar</span></li>
                        <li onClick={()=>{setNav((e)=>5)}} className={nav == 5?'active1':""}><img src={ nav==5? require('./Icons/arxivactivelogo.png') :require('./Icons/arxivlogo.png')} alt=""/><span>Arxiv</span></li>
                        <li onClick={()=>{setNav((e)=>6)}} className={nav == 6?'active1':""}><img src={ nav==6? require('./Icons/adminqoshishactive.png') :require('./Icons/adminqoshishlogo.png')} alt=""/><span>Admin qo'shish</span></li>
                        <li id="chiqish"><img src={require('./Icons/chiqishlogo.png')} alt=""/><span>Chiqish</span></li>
                    </ul>
                    {
                        setNav == 1 &&
                        <Headers text = "Tashkilotlar"/>
                        <Tashkilot/>

                    }
                </div>
            </>
        )
    }
        export default App