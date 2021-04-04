import { Wrapper } from "@src/components/Wrapper";
import dayjs from "dayjs";
import { BlogContent } from "@src/types";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
const Blog: NextPage<{ blog: BlogContent }> = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{dayjs(blog.publishedAt).format("YYYY/MM/DD")}</p>
      <span>{blog.category}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  );
};

//[id].tsx 静的生成用パス
export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://roy1473.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};
//静的生成用props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://roy1473.microcms.io/api/v1/blog/" + id, key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
export default Blog;