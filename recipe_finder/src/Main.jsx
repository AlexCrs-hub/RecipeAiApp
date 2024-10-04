import { Box } from "@mui/material"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { useState } from "react";

const Main = () => {

    const [favs, setFavs] = useState([]);

    return (<Box component='div'>
        <Routes>
            <Route path='/' element={<Home favs={favs} setFavs={setFavs} />}/>
            <Route path='/recipe' element={<Recipe favs={favs} setFavs={setFavs}/>}/>
        </Routes>
    </Box>)
}

export default Main;