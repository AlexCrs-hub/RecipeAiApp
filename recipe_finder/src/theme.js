import { createTheme } from "@mui/material"; 
import colors from "./constants/colors.js";


const theme = createTheme(
    {
        palette: {
            primary: {
                main: colors.background,
            }
        },
        typography: {
            fontFamily: 'Outfit',
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root:{
                        height:'100vh',
                        width: 'auto',
                        backgroundColor: colors.background,
                        display: 'flex',
                        justifyContent: 'center',
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root:{
                       backgroundColor: colors.searchBackground,
                       border: '1px solid',
                       borderRadius: '40px',
                       borderColor: colors.border,
                       height: '40px',
                       width: '400px',
                       marginTop: 20,
                       justifyContent: 'center',
                    }
                }
            }
        }
    }
);

export default theme;