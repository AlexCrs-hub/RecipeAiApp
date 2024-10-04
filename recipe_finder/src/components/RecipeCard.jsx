import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import colors from "../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({card, addToFavs}) => {

    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    const goToRecipe = () => {
        localStorage.setItem('recipe', JSON.stringify(card));
        navigate('/recipe');

    }

    return (
        <Card>
            <CardMedia image=""/>
            <CardContent onClick={() => goToRecipe()}>
                <Typography sx={{fontWeight: '600', fontSize: '16px'}}>
                    {card.title}
                </Typography>
                <Typography sx={{fontSize: '14px'}}>
                    {card.time}
                </Typography>
            </CardContent>
            <CardActions>
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
            </CardActions>
        </Card>
    );
}

export default RecipeCard; 