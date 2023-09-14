"use client"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditArtist from "./components/EditArtist";
import EditSong from "@/app/components/EditSong";
import CreateSong from "@/app/components/CreateSong";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit_artist/:id" element={<EditArtist />} />
                <Route path="/edit_song/:artistID/:songID" element={<EditSong />} />
                <Route path="/create_song/:artistID" element={<CreateSong />} />
            </Routes>
        </Router>
    );
}

export default App;
