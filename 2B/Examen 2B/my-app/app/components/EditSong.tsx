"use client"

import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function EditSong() {
    const navigate = useNavigate();
    const {songID} = useParams();
    const [formData, setFormData] = useState({
        song_name: "",
        duration: "",
        genre: "",
        artist_id: "",
    });

    const [song, setSong] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3001/song/${songID}`)
            .then((response) => {
                setSong(response.data);
                console.log(response.data)
                setFormData({
                    song_name: response.data.song_name,
                    duration: response.data.duration,
                    genre: response.data.genre,
                    artist_id: response.data.artist_id,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [songID]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/song/${songID}`);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: any) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/song/${songID}`, formData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Edit Song</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="song_name">Song's name:</label>
                    <input
                        type="text"
                        id="song_name"
                        name="song_name"
                        value={formData.song_name}
                        onChange={handleChange}
                        className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    />
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    />
                </div>
                <button type="submit"
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>Save
                    changes
                </button>
            </form>
            <button onClick={handleDelete}
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>Delete
                artist
            </button>
        </div>
    );
}

export default EditSong;
