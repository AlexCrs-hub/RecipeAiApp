import { Box, Typography, IconButton, Container } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchSummary = ({card}) => {
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
            <IconButton>
                <FavoriteBorderIcon/>
            </IconButton>
        </Container>
    );
}

export default SearchSummary;