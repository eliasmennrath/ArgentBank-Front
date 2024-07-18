export default function Features({icon, title, text}) {

    console.log(icon)
    return (
        <div className="feature-item">
            <img src={"./img/icon-" + icon + ".png"} alt={icon + " Icon"} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}