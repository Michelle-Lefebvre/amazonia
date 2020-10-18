import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__conntainer">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="large blue prime video background" />

                <div className="home__row">
                    <Product
                        id="1232341"
                        title="The Leann Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        alt="Cover of book The Lean StartUp"
                        rating={3}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/81VEi98NpDL._AC_SL1500_.jpg"
                        alt="Stand Mixer"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="57483920"
                        title="Fitbit Charge 4 fitness and Activity Tracker with Built-In Gps, Heart Rate, Black, One Size"
                        price={169.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
                        alt="Fitbit charge 4"
                        rating={4}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo Dot (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_.jpg"
                        alt="Alexa speaker"
                        rating={5}
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={1799.90}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Egx0o9q3L._AC_SY550_.jpg"
                        alt="iPad Pro"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product

                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71BHzZwokOL._AC_SL1500_.jpg"
                        alt="gaming monitor"
                        rating={3}

                    />
                </div>
            </div>
        </div>
    )
}

export default Home