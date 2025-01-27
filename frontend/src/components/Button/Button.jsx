const Button = ({ text, icon, btnClass, iconClass }) => {
    return (
      <button className={`w-fit flex items-center gap-[8px] rounded-[8px] ${btnClass}`}>
        {text}
        {icon && <img className={`${iconClass}`} src={icon} />}
      </button>
    );
  };
  
  export default Button;
  