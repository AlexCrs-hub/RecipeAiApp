import React, { useState } from "react";
import { Container, Typography, Box, Button, Skeleton } from "@mui/material";
import Searchbar from "../components/Searchbar";
import text from "../constants/text";
import RecipeCard from "../components/RecipeCard";
import { GoogleGenerativeAI } from '@google/generative-ai'
import key from "../apiKey";

const genAI = new GoogleGenerativeAI(
    key
);

const Home = () => {

    const [clear, setClear] = useState(true);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [favs, setFavs] = useState([]);

    const getResponseForGivenPrompt = async (input, setCards) => {
        try{
            setLoading(true);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(input);
            const response = result.response;
            const text = response.text();
            const splitText = text.substring(text.indexOf('[')-1, text.lastIndexOf(']')+1);
            const parsedData = JSON.parse(splitText);
            if(Array.isArray(parsedData)){
                setCards(parsedData);
            }
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    const addToFavs = (fav) => {
        if(!favs.includes(fav, 0)){
            setFavs([...favs, fav]);
        }
        else{
            let favsFiltered = favs.filter((recipe) => {return recipe !== fav});
            setFavs(favsFiltered);
        }
    }

    return (
        <Container component="div">
            <Searchbar clear={clear} setClear={setClear} cards={cards} setCards={setCards} searchFunc={getResponseForGivenPrompt} setSearch={setSearch}/>
            <Box sx={{padding: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                {
                    loading ? 
                    <Skeleton variant='rectangular' animation='wave' width='40rem' height='20rem'/> 
                    :
                    <Typography sx={{fontSize: '32px', fontWeight: '700', marginBottom: '10px'}}>
                        {!search ? text.favs : text.suggestions}
                    </Typography>
                }
                {
                    loading ?
                    <Skeleton variant='rectangular' animation='wave'/> :
                    (search ?
                        cards.map((card) => (
                            <RecipeCard card={card} addToFavs={addToFavs}/>
                        ))
                        :
                        favs.map((fav) =>(
                            <RecipeCard card={fav} addToFavs={addToFavs}/>
                    )))
                }
                {
                (search && !loading) ? 
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