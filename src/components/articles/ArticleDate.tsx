import dayjs from "dayjs";
import { PublishDate, PreviewDate } from "@src/types";
import styles from "@src/styles/pages/blog/ArticleDate.module.scss";

export const PreDate: React.FC<PreviewDate> = (props) => {
  const { createdAt, updatedAt } = props;
  return (
    <>
      <div className={styles.container}>
        <span className={styles.items}>
          <time>作成日：{dayjs(createdAt).format("YYYY/MM/DD")}</time>
        </span>
        <span className={styles.items}>
          <time>更新日:{dayjs(updatedAt).format("YYYY/MM/DD")}</time>
        </span>
      </div>
    </>
  );
};
export const PubDate: React.FC<PublishDate> = (props) => {
  const { publishedAt } = props;
  return (
    <>
      <div className={styles.container}>
        <span className={styles.pub_date}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          <time>{dayjs(publishedAt).format("YYYY/MM/DD")}</time>
        </span>
      </div>
    </>
  );
};
