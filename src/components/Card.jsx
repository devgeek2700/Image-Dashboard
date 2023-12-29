import React, { useEffect, useState } from 'react'
import './card.css'
import axios from "axios";
import Addimg from '../assets/Addimg.png'
import { Link } from 'react-router-dom'

function Card() {


    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })

    const [fetchedImage, setFetchedImage] = useState('');
    const [cards, setCards] = useState([]);

    // storage the card data on localstorage
    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('cardsData'));
        if (storedCards) {
            setCards(storedCards);
        }
    }, [])

    // handle the popup form to create a new card
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=50');

            const randomIndex = Math.floor(Math.random() * response.data.length);
            const imageUrl = response.data[randomIndex].download_url;

            const newCard = {
                id: Date.now(),
                title: e.target.title.value,
                description: e.target.description.value,
                imageUrl,
            };

            setCards((prevCards) => [...prevCards, newCard]);
            localStorage.setItem('cardsData', JSON.stringify([...cards, newCard]));

            setFormData({ title: '', description: '' });

            closeCreateForm();
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    }


    // handle delete of specific card
    const handleDelete = (cardId) => {
        // Filter out the card with the specified ID
        const updatedCards = cards.filter((card) => card.id !== cardId);

        // Update state and local storage
        setCards(updatedCards);
        localStorage.setItem('cardsData', JSON.stringify(updatedCards));
    };


    // popup form on create card
    const popupCreateForm = () => {
        document.getElementById('popup-box').style.visibility = "visible";
        document.getElementById("popup-box").style.opacity = 1;
    }


    // close form on create card
    const closeCreateForm = () => {
        document.getElementById('popup-box').style.visibility = "hidden";
        document.getElementById("popup-box").style.opacity = 0;
    }



    return (
        <>
            <div class="card_container">

                {/* Create card section */}
                <div class="bg-MWm card">
                    <div class="bg-L1K" onClick={popupCreateForm}>
                        <img class="addplusnewcreatecontrolicon-1-AW9" src={Addimg} />
                    </div>
                    <p class="create-a-new-project-dPj" >Create a new project</p>
                    <p class="or-try-a-sample-project-VRw">
                        <span class="or-try-a-sample-project-VRw-sub-0">or try a </span>
                        <span class="or-try-a-sample-project-VRw-sub-1">sample project</span>
                    </p>
                </div>

                {
                    cards.map((card) => (
                        <div className="card" key={card.id}>

                            <Link to={{ pathname: `/Overview/${card.id}`, state: { card } }}>
                                <div className="imgbox">
                                    <img src={card.imageUrl} alt="Random Image" />
                                </div>
                            </Link>
                            <div className="imgcontent">
                                <div className="UpdateBox">
                                    <h2>{card.title}</h2>
                                    <div className="editBtns">
                                        <i class="fa-solid fa-pencil"></i>
                                        <i className="fa-solid fa-trash" onClick={() => handleDelete(card.id)}></i>
                                    </div>
                                </div>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}

            </div>



            {/* popup form */}
            <div id="popup-box" class="modal">
                <div class="content">
                    <h1>
                        Create Project
                    </h1>

                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div class="imputBox">
                            <label for="title">Image Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}


                            />
                        </div>

                        <div class="imputBox">
                            <label for="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Enter Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}

                            />
                        </div>

                        <input type="submit" value="Create" class="CreateFmbtn" />
                    </form>
                    <a href="#" class="box-close" onClick={closeCreateForm}>×</a>

                </div>
            </div>


        </>

    )
}

export default Card
