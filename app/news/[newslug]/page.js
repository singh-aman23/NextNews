import { getNewsItem } from "@/lib/news";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default async function NewsSlug({ params }) {
  const newsItem = await getNewsItem(params.newslug);

  if(!newsItem){
    notFound();
  }
  return (
    <article>
      <header className={classes.heading}>
        <h1>{newsItem.title}</h1>
        <p>{newsItem.date}</p>
      </header>
      <p className={classes.content}>{newsItem.content}</p>
    </article>
  );
}
