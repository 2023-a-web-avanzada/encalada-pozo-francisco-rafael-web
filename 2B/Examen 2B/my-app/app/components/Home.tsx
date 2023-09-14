'use client'
import ArtistList from "@/app/components/ArtistList";
import axios from "axios";
import {useState} from "react";

export default function Home() {
    const [formData, setFormData] = useState({
        name: "",
        date_of_birth: "",
        is_group: false,
        height: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/artist", formData);
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
    return (
        <main>
            <ArtistList></ArtistList>
            <form onSubmit={handleSubmit}>
                <h2>Create New Artist</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <div>
                    <label htmlFor="date_of_birth">Date of Birth:</label>
                    <input type="text" id="date_of_birth" name="date_of_birth"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <div>
                    <label htmlFor="is_group">Is Group:</label>
                    <input type="checkbox" id="is_group" name="is_group" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input type="text" id="height" name="height"
                           onChange={handleChange}
                           className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                </div>
                <button type="submit"
                        onChange={handleChange}
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>
                    Create Artist
                </button>
            </form>
        </main>
    )
}
