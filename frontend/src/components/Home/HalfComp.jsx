import Button from "../Button/Button"

const HalfComp = ({title, titleClass, content, contentClass, btntext, btnClass, icon}) => {
    return (
        <div className="w-[592px] h-auto flex flex-col gap-[20px]">
            <h1 className={`${titleClass}`}>{title}</h1>
            <p className={`${contentClass}`}>{content}</p>
            <Button text={btntext} btnClass={btnClass} icon={icon}/>
        </div>
    )
}

export default HalfComp