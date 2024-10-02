import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Searchbar from "../components/Searchbar";
import text from "../constants/text";
import RecipeCard from "../components/RecipeCard";
import { GoogleGenerativeAI } from '@google/generative-ai'
import key from "../apiKey";

const genAI = new GoogleGenerativeAI(
    key
);

const getResponseForGivenPrompt = async (input) => {
    try{
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();
      console.log(text);
    }
    catch(error){
      console.log("Something Went Wrong");
    }
}

const Home = () => {

    const [clear, setClear] = useState(true);
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState(true);

    return (
        <Container component="div">
            <Searchbar clear={clear} setClear={setClear} searchFunc={getResponseForGivenPrompt}/>
            <Box sx={{padding: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Typography sx={{fontSize: '32px', fontWeight: '700', marginBottom: '10px'}}>
                    {clear ? text.favs : text.suggestions}
                </Typography>
                <RecipeCard title='yes' time='20min' favorite={clear}/>
                {
                !clear ? 
                    <Button size='medium' onClick={() => getResponseForGivenPrompt(text.others)}>
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