import Carousel from 'react-bootstrap/Carousel';


export function CarouselMain() {
  return (
    <Carousel fade className='not-arrow ' indicators={false} interval={3000}>
      <Carousel.Item>
        <img className='d-block w-100 rounded-4' src="/digital1.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 rounded-4' src="/digital2.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 rounded-4' src="/digital3.webp" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}