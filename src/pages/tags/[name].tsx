import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Wrapper } from "@src/components/Wrapper";
import { BlogLink } from "@src/components/BlogList";
//twemoji
import twemoji from "twemoji";
import { getTags } from "@src/lib/blog";
//import { TagList } from "@src/components/tags/TagList";
import { TaggedBlogs } from "@src/types";
import styles from "@src/styles/pages/blog/BlogList.module.scss";
interface Props {
  name: string;
  content: {
    id: string;
    title: string;
    publishedAt: string;
    meta?: { image: { url: string } };
  }[];
}
const Page: NextPage<{ taggedBlogs: Props }> = (props) => {
  return (
    <>
      <section className={styles.tagged_blog_list_layout}>
        <Wrapper>
          <div className={styles.tagged_blog_content}>
            <div className={styles.tag_name_container}>
              <div
                dangerouslySetInnerHTML={{
                  __html: twemoji.parse("ð·", {
                    folder: "svg",
                    ext: ".svg",
                  }),
                }}
              />
              <div
                className={styles.tag_name}
              >{`#${props.taggedBlogs.name}`}</div>
            </div>
            <div className={styles.tagged_blog_list}>
              {props.taggedBlogs.content.map((taggedBlog, i) => (
                <BlogLink key={`taggedBlog-${i}`} item={taggedBlog} />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getTags();
  //paths [name]tsxæå¤
  const paths =
    data.contents.map((content: { name: string; id: string }) => {
      //URL "/tags/[name]"ã®è¦ãç®ããããããã[name]ãå°æå­ã"."ãæ¶ãã
      // [React, Vercel, Next.js]ãªã©
      const lowScaleName = content.name.replace(/\./g, "").toLowerCase();
      return `/tags/${lowScaleName}`;
      //return `/tags/${content.name.replace(/\./, "").toLowerCase()}`;
    }) || [];
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params.name as string;
  //tags CMSã«é¢é£ããè¨äºãæ½åºãããããååº¦ãé ­æå­ãå¤§æå­å
  const rename = name.charAt(0).toUpperCase();
  //idã§æ½åºãããã¼ã¿ã§ã¯ãªã/tags/reactã®ããã«nameã§è¡¨ç¤ºããã
  const data = await getTags(rename);
  //const preData = data.contents[0].content.map((item, i) => {
  //  console.log(item.title, item.publishedAt);
  //});
  return {
    props: {
      taggedBlogs: data.contents[0],
    },
  };
};
export default Page;
