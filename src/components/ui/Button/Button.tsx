import { ButtonProps } from "./types";


const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};


export default Button;