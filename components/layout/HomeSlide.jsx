import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function HomeSlide() {
  return (
    <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        responsive={responsiveSettings}
        autoplay={false}
        easing="ease"
    >
        {products.map((product, i) => (
        <div className="homeGrid" key={product.id}>
            <ProductCard
            product={product}
            loading={getImageLoadingPriority(i)}
            />
        </div>
        ))}
    </Slide>
  )
}

export default HomeSlide