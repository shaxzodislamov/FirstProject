import './kartaAnim.css'

const kartaAnim = ()=>{
    return(
        <>
           <div className='karta-item'>
               <div className="skill-container">
                   <div className="skill">
                       <div className="outer">
                           <div className="inner">
                               <div className="number" data-num="89">

                               </div>
                           </div>
                       </div>

                       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                           <defs>
                               <linearGradient id="GradientColor">
                                   <stop offset="0%" stop-color="#e91e63" />
                                   <stop offset="100%" stop-color="#673ab7" />
                               </linearGradient>
                           </defs>
                           <circle cx="120" cy="120" r="110" stroke-linecap="round" />
                       </svg>
                   </div>


               </div>

               <div id="box">
                   <div id="text">
                       <p id="jami">Jami xatlat: <b>1000</b></p>
                       <p id="berilgan">Yetkazib berilgan: <b>977</b></p>
                   </div>
                   <button id="open_royxat">Ro`yxat ochish</button>
               </div>
           </div>
        </>
    )
}

export default kartaAnim