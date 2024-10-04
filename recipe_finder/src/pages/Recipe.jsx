import { Box, Container, Typography } from "@mui/material";
import SearchSummary from "../components/SearchSummary";

const Recipe = ({favs, setFavs}) => {
    
    const card = JSON.parse(localStorage.getItem('recipe') || '');
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
        <Container maxWidth='xl'>
            <Container  sx={{display: 'flex', flexDirection: 'row', width: '864px'}} maxWidth='xl'>
                <SearchSummary card={card} addToFavs={addToFavs}/>
                <Container sx={{padding: theme => theme.spacing(4), width: '400px'}}>
                    <Box component='div' sx={{display: 'flex', flexDirection:'column', gap: theme => theme.spacing(3)}}>
                        <Typography>
                            {'Ingrediens:'}
                        </Typography>
                        <Typography>
                            {card.ingredients}
                        </Typography>
                        <Typography>
                            {'Instructions:'}
                        </Typography>   
                        <Typography>
                            {card.instructions}
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </Container>
    );
}

export default Recipe;