import Carousel from 'react-bootstrap/Carousel';

export function CarouselMain() {
  return (
    
    <div className="shadow-lg rounded-4 overflow-hidden mb-4 mb-md-0">
        <Carousel fade className='not-arrow' indicators={false} interval={3000}>
        <Carousel.Item>
            <img 
                className='d-block w-100' 
                src="/digital1.webp" 
                alt="Digital Art 1" 
                style={{ objectFit: 'cover', height: '400px' }} 
            />
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100' 
                src="/digital2.webp" 
                alt="Digital Art 2"
                style={{ objectFit: 'cover', height: '400px' }} 
            />
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100' 
                src="/digital3.webp" 
                alt="Digital Art 3"
                style={{ objectFit: 'cover', height: '400px' }} 
            />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}