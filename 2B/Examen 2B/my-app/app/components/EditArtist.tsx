"use client"

import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import SongsList from "@/app/components/SongsList";


function EditArtist() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        date_of_birth: "",
        is_group: false,
        height: "",
    });

    const [artist, setArtist] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3001/artist/${id}`)
            .then((response) => {
                setArtist(response.data);
                setFormData({
                    name: response.data.name,
                    date_of_birth: response.data.date_of_birth,
                    is_group: response.data.is_group,
                    height: response.data.height,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/artist/${id}`);
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
            await axios.put(`http://localhost:3001/artist/${id}`, formData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Editar Artista</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Artist's name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    />
                </div>
                <div>
                    <label htmlFor="date_of_birth">Date of birth:</label>
                    <input
                        type="text"
                        id="date_of_birth"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    />
                </div>
                <div>
                    <label htmlFor="is_group">¿Is it a Group?</label>
                    <input
                        type="checkbox"
                        id="is_group"
                        name="is_group"
                        checked={formData.is_group}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height}
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
            <SongsList artistID={id}></SongsList>
            <Link to={`/create_song/${artist.id}`}>New Song</Link>
        </div>


    );
}

export default EditArtist;
