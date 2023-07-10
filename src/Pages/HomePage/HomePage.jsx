import { Header } from "../../components/Header/Header";
import "./HomePage.css";
import Image1 from "../../Assests/Images/CarouselImage1.webp";
import Image2 from "../../Assests/Images/CarouselImage2.webp";
import Image3 from "../../Assests/Images/CarouselImage3.webp";
import Image4 from "../../Assests/Images/CarouselImage4.webp";
import { Carousel } from "../../components/Carousel/Carousel";
const slides = [
  {
    img: Image1,
    title: "Image1",
  },
  {
    img: Image2,
    title: "Image2",
  },
  {
    img: Image3,
    title: "Image3",
  },
  {
    img: Image4,
    title: "Image4",
  }
];

export function HomePage() {
  return (
    <>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="carouselContainer">
            <Carousel slides={slides}/>
        </div>
      </div>
    </>
  );
}
