import style from "./style.module.css"

function Card (props){
    return (
    <div className={style.div}>
        <img src={props.src} alt={props.alt}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p> 
    </div>)
}

export {Card};