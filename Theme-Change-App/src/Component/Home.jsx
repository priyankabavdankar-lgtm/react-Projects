import { useContext } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { themeContext } from "../App";

export function Home () {
    let theme = useContext(themeContext)
    console.log(theme)
    return(
        <>
        <Header/>
        <h1 className="Main" style={{backgroundColor:`${theme.bgcolor}`, color:`${theme.color}`}}>This is Main Page</h1>
        <Footer/>
        </>
    )
}