import { createTheme } from "@mui/material"; 
import colors from "./constants/colors.js";


const theme = createTheme(
    {
        palette: {
            primary: {
                main: colors.background,
            }
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root:{
                        height:'100vh',
                        width: 'max-width',
                        backgroundColor: colors.background,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
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
                       outline: '0px',
                       '& fieldset': { border: 'none' }
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root:{
                       backgroundColor: colors.searchBackground,
                       borderRadius: '8px',
                       height: '88px',
                       width: '384px',
                       display: 'grid',
                       gridTemplateColumns: '20% 65% 15%',
                    }
                }
            },
            MuiCardContent: {
                styleOverrides: {
                    root:{
                      padding: '5px'
                    }
                } 
            },
            MuiButton: {
                styleOverrides: {
                    root:{
                      margin: '16px 32px',
                      width: '180px',
                      height:'48px',
                      backgroundColor: colors.fav,
                      color: colors.background,
                      alignSelf: 'center',
                      borderRadius: '8px',
                      textTransform: 'none'
                    }
                } 
            }
        }
    }
);

export default theme;