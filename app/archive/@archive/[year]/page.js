import NewsItems from "@/Components/NewsItem";
import { getNewsForYear } from "@/lib/news";
import classes from './page.module.css';

export default async function FilteredNewsPage({params}){
    const newsYear = params.year;
    const news = await getNewsForYear(newsYear);

    return <div className = {classes.news}>
    <NewsItems news = {news}/>
    </div>
}