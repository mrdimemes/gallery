import Slider from "react-slick";

import { SectionContent } from "components/SectionContent";

import { SliderCard } from "./SliderCard";


const MenuPreview = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section>
      <SectionContent>
        <Slider {...settings}>
          <SliderCard image="none" name="Название 1" compound="Граммовки 1" />
          <SliderCard image="none" name="Название 2" compound="Граммовки 2" />
          <SliderCard image="none" name="Название 3" compound="Граммовки 3" />
          <SliderCard image="none" name="Название 4" compound="Граммовки 4" />
          <SliderCard image="none" name="Название 5" compound="Граммовки 5" />
          <SliderCard image="none" name="Название 6" compound="Граммовки 6" />
          <SliderCard image="none" name="Название 7" compound="Граммовки 7" />
          <SliderCard image="none" name="Название 8" compound="Граммовки 8" />
        </Slider>
      </SectionContent>
    </section>

  );
}


export default MenuPreview;
