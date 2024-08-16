import { getAvailableNewsYears } from "@/lib/news"
import Link from "next/link";
import classes from './page.module.css';

export default function ArchivePage(){
    const links = getAvailableNewsYears();

    function displayYears(year){
        return <li key = {year} className = {classes.yearList}>
            <Link href = {`/archive/${year}`}>{year}</Link>
        </li>
    }

    return <>
        <header>
            <nav className = {classes.nav}>
                <ul className = {classes.list}>
                    {links.map(displayYears)}
                </ul>
            </nav>
        </header>
    </>
}  