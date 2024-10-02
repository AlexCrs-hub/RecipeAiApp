import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import text from "../constants/text";

const Searchbar = () => {

    var clear = true;

    return (
        <Box>
            <TextField slotProps= {
                {
                    input: {
                        endAdornment: clear  ?
                            <InputAdornment>
                                <SearchIcon />
                            </InputAdornment>
                            :
                            <InputAdornment>
                                <CloseIcon />
                            </InputAdornment>
                    }
                }
            }
            placeholder={text.placeholder}
        /> 
        </Box>
    );
}

export default Searchbar;