import React, { useState, useEffect } from 'react';
import './overview.css'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';




function Overview() {
    const location = useLocation();
  const { state } = location;
  const { id } = useParams();

  const [cardDetails, setCardDetails] = useState(state || null);

  useEffect(() => {
    if (!cardDetails) {
      // Fetch card details only if not provided in location state
      const fetchCardDetails = async () => {
        try {
          // Assuming the image URL, title, and description are present in the state
          const cardFromStorage = JSON.parse(localStorage.getItem('cardsData'));
          const selectedCard = cardFromStorage.find((card) => card.id === parseInt(id, 10));

          // Set the card details
          setCardDetails(selectedCard);
        } catch (error) {
          console.error('Error fetching card details:', error);
        }
      };

      fetchCardDetails();
    }
  }, [cardDetails, id]);


    return (
        <>
            {cardDetails ? (
                <div class="container" key={cardDetails.id}>

                    {/* <!-- Left Column / Headphones Image --> */}
                    <div class="left-column">
                        <img data-image="black"  src={cardDetails.imageUrl} alt="Selected Image" />
                        <img data-image="blue"  src={cardDetails.imageUrl}alt="Selected Image" />
                        <img data-image="red" class="active"  src={cardDetails.imageUrl} alt="Selected Image" />
                    </div>


                    {/* <!-- Right Column --> */}
                    <div class="right-column">

                        {/* <!-- Product Description --> */}
                        <div class="product-description">
                            <span>Author</span>
                            <h1>{cardDetails.title}</h1>
                            <p>{cardDetails.description}</p>
                        </div>


                        {/* <!-- Product Pricing --> */}
                        <div class="product-price">
                            <a href="/" class="cart-btn">Back to Home</a>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </>
    )
}

export default Overview
