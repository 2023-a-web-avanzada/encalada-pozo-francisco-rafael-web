"use client"

import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function CreateSong() {
    const navigate = useNavigate();
    const {artistID} = useParams();
    const [formData, setFormData] = useState({
        song_name: "",
        duration: "",
        genre: "",
        artist_id: artistID,
    });


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
            await axios.post("http://localhost:3001/song", formData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create New Song</h2>
                <div>
                    <label htmlFor="song_name">Name:</label>
                    <input type="text" id="song_name" name="song_name"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input type="text" id="duration" name="duration"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" id="genre" name="genre"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <button type="submit"
                        onChange={handleChange}
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>
                    Create Song
                </button>
            </form>
        </div>


    );
}

export default CreateSong;
