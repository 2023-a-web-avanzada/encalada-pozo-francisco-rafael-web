'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import {Song} from "../types/types";
import {Link} from "react-router-dom";

export default function SongsList(props:any) {

    const [songs, setSongs] = useState<Song[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/song`)
            .then((response) => {
                setSongs(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (<div>
        <h1>Songs List</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Song's name</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Artist ID</th>
                <th>Edit</th>
            </tr>
            </thead>

            <tbody>
            {songs.map((song) => (
                <tr key={song.id}>
                    <td>{song.id}</td>
                    <td>{song.song_name}</td>
                    <td>{song.duration}</td>
                    <td>{song.genre}</td>
                    <td>{props.artistID}</td>
                    <td>
                        <Link to={`/edit_song/${song.artist_id}/${song.id}`}>Edit</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}

