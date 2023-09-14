'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import { Artist } from "../types/types";
import {Link} from "react-router-dom";

export default function ArtistList() {

    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/artist')
            .then((response) => {
                setArtists(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (<div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Artist's name</th>
                <th>Date of birth</th>
                <th>Group</th>
                <th>Height</th>
                <th>Edit</th>
            </tr>
            </thead>

            <tbody>
            {artists.map((artist) => (
                <tr key={artist.id}>
                    <td>{artist.id}</td>
                    <td>{artist.name}</td>
                    <td>{artist.date_of_birth}</td>
                    <td>{artist.is_group ? "Yes" : "No"}</td>
                    <td>{artist.height}</td>
                    <td>
                        <Link to={`/edit_artist/${artist.id}`}>Edit</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}

