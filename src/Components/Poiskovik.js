import './Poiskovik.css'

const Poisk = () =>{
    return(
        <>
            <div id = "search">
                 <input type="text" id = "poisk" placeholder="Qidirish"/>
                <div className="rasm">
                <img src={require('../Icons/Search.png')} alt="" id = "img1"/>
                </div>
                 <button>Tashkilot qo'shish</button>
            </div>
        </>
    )
}

export default Poisk