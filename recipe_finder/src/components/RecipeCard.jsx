import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import colors from "../constants/colors";

const RecipeCard = ({title, time, favorite}) => {
    return (
        <Card>
            <CardMedia image=""/>
            <CardContent>
                <Typography sx={{fontWeight: '600', fontSize: '16px'}}>
                    {title}
                </Typography>
                <Typography sx={{fontSize: '14px'}}>
                    {time}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    favorite ?
                    <FavoriteIcon sx={{color: colors.fav}}/>
                    :
                    <FavoriteBorderIcon/>
                }
            </CardActions>
        </Card>
    );
}

export default RecipeCard; 