import './Kurierlar_item.css'

const Kurierlar_item = ()=>{
    return(
        <>
            <div className="kurier">
                <div className="kurier1">
                    <img src={require('../Icons/Ellipse 6.png')} alt=""/>
                    <h2>Fazliddin Nasruddinov</h2>
                    <div className="btn1">
                    <button id="xat"> Xat berish</button>
                    <button id="profil">Profil</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kurierlar_item