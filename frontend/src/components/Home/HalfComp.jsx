import Button from "../Button/Button"

const HalfComp = ({title, titleClass, content, contentClass, btntext, btnClass, icon, iconClass}) => {
    return (
        <div className="flex flex-col gap-[10px]">
            <h1 className={`${titleClass}`}>{title}</h1>
            <p className={`${contentClass}`}>{content}</p>
            <Button text={btntext} btnClass={btnClass} icon={icon} iconClass={iconClass}/>
        </div>
    )
}

export default HalfComp