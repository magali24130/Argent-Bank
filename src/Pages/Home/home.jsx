import React from 'react';
import Banner from '../../Components/Banner/banner.jsx';
import Item from '../../Components/Item/item.jsx';
import FeaturesItemData from '../../Data/FeaturesItemData.json';
import iconChat from '../../img/icon-chat.png';
import iconMoney from '../../img/icon-money.png';
import iconSecurity from '../../img/icon-security.png';
import './home.scss';

/* Home page */
function Home () {
    const imageData = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
        <div className='homepage'>
            <main>
                {/* Returns banner*/}
                <Banner />
                <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    {/* Return items from json file with map */}
                    {FeaturesItemData.map((data) => (
                        /* Return item component */
                        < Item 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Home