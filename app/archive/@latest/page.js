import NewsItems from "@/Components/NewsItem";
import { getLatestNews } from "@/lib/news"
import classes from './page.module.css';

export default function LatestNewsPage(){
    const latestNews = getLatestNews();
    return <>
        <h2 className = {classes.heading}>Latest News</h2>
        <div className = {classes.latestNews}>
        <NewsItems news = {latestNews}/>
        </div>

    </>
}