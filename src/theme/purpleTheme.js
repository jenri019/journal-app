import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#543884',
            button: '#262254'
        },
        secondary: {
            main: '#8551e0'
        },
        error: {
            main: red.A400
        }
    }
})