import { Box, Typography, IconButton, Container } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import colors from "../constants/colors";

const SearchSummary = ({card, addToFavs}) => {

    const [favorite, setFavorite] = useState(false);

    return (
        <Container component='div' sx={{display: 'grid', gridTemplateColumns:'80% 20%'}}>
            <Box component='div'>
                <Typography sx={{fontWeight: '600', fontSize: '16px'}}>
                    {card.title}
                </Typography>
                <Typography sx={{fontSize: '14px'}}>
                    {card.time}
                </Typography>
            </Box>
            {
                favorite ?
                <IconButton onClick={() => {addToFavs(card); setFavorite(false)}}>
                    <FavoriteIcon sx={{color: colors.fav}}/>
                </IconButton>
                :
                <IconButton onClick={() => {addToFavs(card); setFavorite(true)}}>
                    <FavoriteBorderIcon/>
                </IconButton>
            }
        </Container>
    );
}

export default SearchSummary;