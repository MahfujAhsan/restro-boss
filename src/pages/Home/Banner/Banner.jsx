import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/home/01.jpg';
import image2 from '../../../assets/home/02.jpg';
import image3 from '../../../assets/home/03.png';
import image4 from '../../../assets/home/04.jpg';
import image5 from '../../../assets/home/05.png';
import image6 from '../../../assets/home/06.png';
import './Banner.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Banner = () => {
    return (
        <LazyLoadComponent>
            <Carousel transitionTime={300} onSwipeMove useKeyboardArrows showThumbs={false} >
                <div>
                    <LazyLoadImage
                        className="h-[400px] md:h-auto"
                        src={image4}
                        effect="blur"
                        visibleByDefault={image1 === '../../../assets/home/01.jpg'}
                        delayTime={500}
                        placeholder={<span>{image1}</span>}
                    />
                </div>
                <div>
                    <LazyLoadImage
                        className="h-[420px] md:h-auto"
                        src={image2}
                        effect="blur"
                    />
                </div>
                <div>
                    <LazyLoadImage
                        className="h-[420px] md:h-auto"
                        src={image3}
                        effect="blur"
                    />
                </div>
                <div>
                    <LazyLoadImage
                        className="h-[420px] md:h-auto"
                        src={image1}
                        effect="blur"
                    />
                </div>
                <div>
                    <LazyLoadImage
                        className="h-[420px] md:h-auto"
                        src={image5}
                        effect="blur"
                    />
                </div>
                <div>
                    <LazyLoadImage
                        className="h-[420px] md:h-auto"
                        src={image6}
                        effect="blur"
                    />
                </div>
            </Carousel>
        </LazyLoadComponent>
    )
}

export default Banner