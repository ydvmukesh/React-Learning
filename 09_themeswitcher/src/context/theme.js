import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{},
})

//------------------------------------------------- // or

// const ThemeContext = createContext({
//         themeMode: 'light',
//         darkTheme: () =>{},
//         lightTheme: () =>{},
//     })
// export default ThemeContext

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

 