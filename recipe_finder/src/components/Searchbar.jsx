import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import text from "../constants/text";

const Searchbar = ({clear, setClear}) => {

    return (
        <Box>
            <TextField slotProps= {
                {
                    input: {
                        endAdornment: clear  ?
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            :
                            <InputAdornment>
                                <IconButton onClick={() => setClear(true)}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                    }
                }
            }
            placeholder={text.placeholder}
            variant="outlined"
            onChange={() => setClear(false)}
        /> 
        </Box>
    );
}

export default Searchbar;