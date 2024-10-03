import { Box, Typography } from "@mui/material";
import SearchSummary from "../components/SearchSummary";

const Recipe = ({card}) => {
    return (
        <Box component='div' sx={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
            <SearchSummary card={card}/>
            <Typography>
                {card.ingredients + '\n' + card.instructions}
            </Typography>
        </Box>
    );
}

export default Recipe;