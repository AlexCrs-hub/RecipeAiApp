import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import colors from "../constants/colors";

const RecipeCard = ({card, favorite, addToFavs}) => {
    return (
        <Card onClick={() => console.log(card.ingredients)}>
            <CardMedia image=""/>
            <CardContent>
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
                    <IconButton>
                        <FavoriteIcon sx={{color: colors.fav}}/>
                    </IconButton>
                    :
                    <IconButton onClick={addToFavs(card)}>
                        <FavoriteBorderIcon/>
                    </IconButton>
                }
            </CardActions>
        </Card>
    );
}

export default RecipeCard; 