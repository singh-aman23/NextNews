import classes from './MainHeader.module.css';
import Navlink from "./Navlink";

export default function MainHeader(){
    return <>
    <div className = {classes.header}>
    <Navlink href = '/'>HOME</Navlink>
    <Navlink href = '/archive' >ARCHIVE</Navlink>
    <Navlink href = '/news' >NEWS</Navlink>
    </div>
    </>
}