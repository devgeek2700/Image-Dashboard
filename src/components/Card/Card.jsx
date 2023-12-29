import React, { useEffect, useState } from 'react';
import './card.css';
import axios from 'axios';
import Addimg from '../../assets/Addimg.png';
import { Link } from 'react-router-dom';

function Createtemp() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const [cards, setCards] = useState(() => {
        // Initialize state from local storage or an empty array if not available
        const storedCards = JSON.parse(localStorage.getItem('cardsData'));
        return storedCards || [];
    });

    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        // Update local storage when the cards state changes
        localStorage.setItem('cardsData', JSON.stringify(cards));
    }, [cards]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=50');

            const randomIndex = Math.floor(Math.random() * response.data.length);
            const imageUrl = response.data[randomIndex].download_url;

            if (selectedCard) {
                const updatedCards = cards.map((card) =>
                    card.id === selectedCard.id
                        ? { ...card, title: e.target.title.value, description: e.target.description.value }
                        : card
                );

                setCards(updatedCards);
                setFormData({ title: '', description: '' });
                setSelectedCard(null);
            } else {
                const newCard = {
                    id: Date.now(),
                    title: e.target.title.value,
                    description: e.target.description.value,
                    imageUrl,
                };

                setCards((prevCards) => [...prevCards, newCard]);
                setFormData({ title: '', description: '' });
            }

            closeCreateForm();
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    };

    const handleDelete = (cardId) => {
        const updatedCards = cards.filter((card) => card.id !== cardId);
        setCards(updatedCards);
    };

    const handleUpdate = (cardId) => {
        const selectedCard = cards.find((card) => card.id === cardId);
        setSelectedCard(selectedCard);
        popupCreateForm();
    };

    const popupCreateForm = () => {
        document.getElementById('popup-box').style.visibility = 'visible';
        document.getElementById('popup-box').style.opacity = 1;
    };

    const closeCreateForm = () => {
        document.getElementById('popup-box').style.visibility = 'hidden';
        document.getElementById('popup-box').style.opacity = 0;
    };

    return (
        <>
            <div className="card_container">
                <div className="bg-MWm card">
                    <div className="bg-L1K" onClick={popupCreateForm}>
                        <img className="addplusnewcreatecontrolicon-1-AW9" src={Addimg} />
                    </div>
                    <p className="create-a-new-project-dPj">Create a new project</p>
                    <p className="or-try-a-sample-project-VRw">
                        <span className="or-try-a-sample-project-VRw-sub-0">or try a </span>
                        <span className="or-try-a-sample-project-VRw-sub-1">sample project</span>
                    </p>
                </div>

                {cards.map((card) => (
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
                                    <i className="fa-solid fa-pencil" onClick={() => handleUpdate(card.id)}></i>
                                    <i className="fa-solid fa-trash" onClick={() => handleDelete(card.id)}></i>
                                </div>
                            </div>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div id="popup-box" className="modal">
                <div className="content">
                    <h1>Create Project</h1>
                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div className="imputBox">
                            <label htmlFor="title">Image Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="imputBox">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Enter Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <input type="submit" value="Create" className="CreateFmbtn" />
                    </form>
                    <a href="#" className="box-close" onClick={closeCreateForm}>
                        ×
                    </a>
                </div>
            </div>
        </>
    );
}

export default Createtemp;