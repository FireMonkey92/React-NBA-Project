import React from 'react';
import Slider from 'react-slick';

export const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1
}

export const generateSlides = ({ Slides }) => {
    // console.log(Slides);
    if (Slides) {
        return (
            <Slider {...sliderSettings}>
                {
                    Slides.map((item) => {
                        // console.log(item);
                        return (
                            <div key={item.id}>
                                <div className='slider-items' style={{ background: `url(./images/covers/${item.cover})` }}>
                                    <div className='caption'>
                                        <h4>{item.topic}</h4>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
        )
    }
}

const Featured = (props) => {
    // console.log(props);
    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;