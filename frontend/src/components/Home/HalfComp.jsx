import Button from "../Button/Button";
import { DivideIcon as LucideIcon } from "lucide-react";

const HalfComp = ({
  title,
  titleClass,
  content,
  contentClass,
  btntext,
  btnClass,
  icon,
  iconClass,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={`${titleClass} animate-fade-in`}>{title}</h2>
      <p className={`${contentClass} animate-fade-in delay-100`}>{content}</p>
      <div className="animate-fade-in delay-200">
        <Button
          text={btntext}
          btnClass={btnClass}
          icon={icon}
          iconClass={iconClass}
        />
      </div>
    </div>
  );
};

export default HalfComp;
