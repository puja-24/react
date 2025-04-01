import { createContext,useContext } from "react";

//we can put values like context pehli bar bne toh usme kya kya feed ho
export const ThemeContext = createContext({
    themeMode: " Light",//yeh dono method hai
    darkTheme: () => {},
    lightTheme: () => {},//we can give both variabes as well as methods

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}