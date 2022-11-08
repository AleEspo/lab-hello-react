import style from "./style.module.css"

function Header (props){
    return (
    <div className={style.div}>
        <nav>
            <img src={props.src} alt={props.alt}/>
            <img src={props.src} alt={props.alt}/>
        </nav>
        <div>
            <h1 className={style.title}>Say hello to <br/> ReactJS </h1>
            <p className={style.paragraph}>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    </div>
    )
}

export {Header};