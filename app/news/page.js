import classes from './page.module.css';
import NewsItem from '@/Components/NewsItem';
import { DUMMY_NEWS } from '@/dummy-news';

export default function News(){
    return <>
    <div className = {classes.news}>
        <NewsItem news = {DUMMY_NEWS}/>
    </div>

    </>
}