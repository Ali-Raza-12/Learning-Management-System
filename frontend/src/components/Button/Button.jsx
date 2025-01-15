const Button = ({ text, icon, btnClass }) => {
    return (
      <button className={`w-fit flex items-center gap-[8px] rounded-[8px] ${btnClass}`}>
        {text}
        {icon && <img src={icon} />}
      </button>
    );
  };
  
  export default Button;
  