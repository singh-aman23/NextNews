import { getAllNews } from "@/lib/news";
import classes from "./page.module.css";
import NewsItem from "@/Components/NewsItem";

export default async function News() {
  const news = await getAllNews();
  return (
    <>
      <div className={classes.news}><NewsItem news = {news}/></div>
    </>
  );
}
