import './Tashkilotitem.css'

const tashitem = ()=>{
    return(
        <>
            <div className="malumot">
                <img src={require('../Icons/tashkilotwhite.png')} alt=""/>
                <p id="one">Toshkent shaxar</p>
                <div className="btn">
                    <button>Faylni yuklash</button>
                    <button>Ro'yxatni ko'rish</button>
                </div>
            </div>

        </>
    )
}

export default tashitem
