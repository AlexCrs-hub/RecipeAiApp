import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import text from "../constants/text";
import { useState } from "react";

const Searchbar = ({clear, setClear, searchFunc}) => {

    const [input, setInput] = useState('');


    return (
        <Box>
            <TextField slotProps= {
                {
                    input: {
                        endAdornment: clear  ?
                            <InputAdornment position="end">
                                <IconButton onClick={() => {setClear(false); searchFunc(input);}}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            :
                            <InputAdornment  position="end">
                                <IconButton onClick={() => {setClear(true); setInput('');}}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                    }
                }
            }
            value={input}
            placeholder={text.placeholder}
            variant="outlined"
            onChange={(e) => {setClear(true); setInput(e.target.value)}}
        /> 
        </Box>
    );
}

export default Searchbar;