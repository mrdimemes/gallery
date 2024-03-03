import { ReserveButton } from "components/ReserveButton";
import { CAFE_NAME } from "constants/cafe";


const Intro = () => {
  return (
    <section>
      <div>{CAFE_NAME}</div>
      <ReserveButton />
    </section>
  );
};


export default Intro;
