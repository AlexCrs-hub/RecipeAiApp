import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import text from "../constants/text";
import { GoogleGenerativeAI } from '@google/generative-ai'
import key from "../apiKey";
import { useState } from "react";

const genAI = new GoogleGenerativeAI(
    key
);

const Searchbar = ({clear, setClear}) => {

    const [input, setInput] = useState('');

    const getResponseForGivenPrompt = async () => {
        try{
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const result = await model.generateContent(input);
          const response = await result.response;
          const text = await response.text();
          console.log(text);
        }
        catch(error){
          console.log("Something Went Wrong");
        }
    }


    return (
        <Box>
            <TextField slotProps= {
                {
                    input: {
                        endAdornment: clear  ?
                            <InputAdornment position="end">
                                <IconButton onClick={() => {setClear(false); getResponseForGivenPrompt();}}>
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
            onChange={(e) => {setInput(e.target.value)}}
        /> 
        </Box>
    );
}

export default Searchbar;