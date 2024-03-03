import { Button } from "components/ui";


const ReserveButton = () => {
  const onClick = () => console.log("ReserveButton click");
  return <Button onClick={onClick}>Зарезервировать</Button>;
};
 

export default ReserveButton;
