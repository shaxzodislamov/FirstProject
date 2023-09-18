import Malumot from '/Malumot_ozgartirish.css'
import {useState} from "react";

const Malumot = ()=>{
    let sana = [
        {
            soni:1000,
            sanasi:"22.12.2022"
        },
        {
            soni:2000,
            sanasi:"22.12.2022"
        },
        {
            soni:3000,
            sanasi:"22.12.2022"
        },
        {
            soni:4000,
            sanasi:"22.12.2022"
        },
        {
            soni:5000,
            sanasi:"22.12.2022"
        },
        {
            soni:6000,
            sanasi:"22.12.2022"
        },
        {
            soni:7000,
            sanasi:"22.12.2022"
        },
        {
            soni:8000,
            sanasi:"22.12.2022"
        },

    ]


    const [show,setShow] = useState(false)

    const [view,setview] = useState(false)

    const showView = ()=>{
        setview((hidden)=>{
            return !hidden
        })
    }
    const  funShow = ()=>{
        setShow(show=>!show)
    }
    return(
        <>
            <button id="hide" onClick={ funShow }> add data </button>

            { show &&

                <div className="overlay" >
                    <form action="">
                        <img onClick={funShow} src={require('./Icons/x.png')} alt="" id="close"/>
                        <div className="window">
                            <p>Ma'lumotlarni o'zgartirish</p>
                            <img src={require('./Icons/tashkilotwhite.png')} alt=""/>
                            <input type="text" />
                            <input type={view?"password":"text"} value={"Password"}/>
                            <img onClick={showView} src={require('./Icons/glaz.png')} alt="" id="glaz"/>
                            <input type="text"/>
                            <input type="text"/>
                            <div className="switch-field">
                                <input type="radio" id="radio-three" name="switch-two" value="yes" checked/>
                                <label htmlFor="radio-three">Aktiv</label>
                                <input type="radio" id="radio-four" name="switch-two" value="maybe" />
                                <label htmlFor="radio-four">Noaktiv</label>
                            </div>
                            <button id="saqlash">saqlash</button>
                        </div>
                    </form>
                </div>
            }

        </>
    )

}

export default Malumot