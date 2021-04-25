import Head from "next/head";
import { NextPage } from "next";
import posts from ".contents/posts.json";
//import post from "@.contents/posts.json";
//import { TwitterIcon } from "@src/components/icons/TwitterIcon";
import { Header } from "@src/components/Header";
import { Wrapper } from "@src/components/Wrapper";
import { Profile } from "@src/components/cards/Profile";
import { PostList } from "@src/components/PostList";
import { member } from "@src/utils/member";
import { PostItem } from "@src/types";
import styles from "@src/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.home_profile}>
          <Wrapper>
            <Profile member={member} />
          </Wrapper>
        </section>
        <section className={styles.home_posts}>
          <Wrapper>
            <div className={styles.home_section_title_content}>
              <h2 className={styles.home_section_title}>関連記事</h2>
            </div>
            <PostList items={posts as PostItem[]} />
          </Wrapper>
        </section>
      </main>
    </>
  );
};
export default Home;
