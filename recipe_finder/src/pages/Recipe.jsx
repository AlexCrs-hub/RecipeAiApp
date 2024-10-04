import { Container, Typography } from "@mui/material";
import SearchSummary from "../components/SearchSummary";

const Recipe = ({favs, setFavs}) => {
    
    const card = JSON.parse(localStorage.getItem('recipe') || '');

    return (
        <Container  sx={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
            <SearchSummary card={card}/>
            <Container>
                <Typography>
                    {card.ingredients + '\n' + card.instructions}
                </Typography>
            </Container>
        </Container>
    );
}

export default Recipe;