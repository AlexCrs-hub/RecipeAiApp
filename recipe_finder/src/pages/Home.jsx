import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Searchbar from "../components/Searchbar";
import text from "../constants/text";
import RecipeCard from "../components/RecipeCard";

const Home = () => {

    const [clear, setClear] = useState(true);
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState(true);

    return (
        <Container component="div">
            <Searchbar clear={clear} setClear={setClear}/>
            <Box sx={{padding: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Typography sx={{fontSize: '32px', fontWeight: '700', marginBottom: '10px'}}>
                    {clear ? text.favs : text.suggestions}
                </Typography>
                <RecipeCard title='yes' time='20min' favorite={clear}/>
                {
                search ? 
                    <Button size='medium'>
                        {text.dontLike}
                    </Button> 
                    : 
                    null
                }
            </Box>
        </Container>
    );
}

export default Home;