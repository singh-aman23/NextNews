import Link from "next/link";
import classes from "./NewsItem.module.css";

export default function NewsItems({ news }) {
  function showNews(newsItem) {
    return (
      <div className={classes.news} key={newsItem.id}>
        <Link href={`/news/${newsItem.slug}`}>
          {newsItem.title}
          <div className={classes.image}>
            <img
              src="https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2Fcd22f77b-0f3a-466e-aaf2-34e9829a7069.png&w=3840&q=75"
              alt={newsItem.title}
            />
          </div>
          <p>Uploaded on {newsItem.date}</p>
        </Link>
      </div>
    );
  }

  return <>
  {news.map(showNews)}
  </>;
}
