import Carousel from 'react-bootstrap/Carousel';
import sliderData from './sliderData'

const DarkVariantExample = () => {
    return (
        <Carousel data-bs-theme="dark">
            {sliderData.map(elem => {
                return(
                    <Carousel.Item key={elem.id}>
                        <div className="dark__content">
                            <div className="dark__content_left">
                                <p>Памятник</p>
                                <p>{elem.monument}</p>
                                <p>{elem.stela}</p>
                                <p>{elem.stand}</p>
                                <p>{elem.flower}</p>
                                <p>{elem.polishing}</p>
                                <p>{elem.priceUpTo}</p>
                                <p>{elem.priceFrom}</p>
                            </div>
                            <img className="dark__content_img" src={elem.img} alt="r1"/>
                            <div className="dark__content_right">
                                <p>{elem.specialOffer}</p>
                                <p>{elem.set}</p>
                                <li>{elem.set1}</li>
                                <li>{elem.set2}</li>
                                <li>{elem.set3}</li>
                                <li>{elem.set4}</li>
                                <li>{elem.set5}</li>
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default DarkVariantExample;