import './Item.css'

const Item = (props) =>{
    return(
        <>
            <div className="item">
                <img src={require('../Icons/Tashkilot.png')} alt=""/>
                <p id="one">{props.soni}ta</p>
                <p >Yuklangan sanasi <b>{props.sana}</b></p>
                <div className="btn">
                <button>Faylni yuklash</button>
                <button>Ro'yxatni ko'rish</button>
                </div>
            </div>
        </>
    )
}

export default Item