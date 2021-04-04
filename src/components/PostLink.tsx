import { PostItem } from "@src/types";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import styles from "@src/styles/components/PostLink.module.scss";

export const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, contentSnippet, link, isoDate, dateMiliSeconds } = props.item;
  return (
    <li className={styles.post_link}>
      <a className={styles.post_link_content} href={link}>
        <time className={styles.post_link_at} dateTime={isoDate}>
          {dayjs(isoDate).format("YYYY-MM-DD")}
        </time>
        <h2 className={styles.post_link_title}>{title}</h2>
        <Image src="/icon/qiita.png" width="30" height="30" alt="qiita" />
      </a>
    </li>
  );
};