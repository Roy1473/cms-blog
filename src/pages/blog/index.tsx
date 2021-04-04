import { NextPage, GetStaticProps } from "next";
import { getBlog } from "@src/lib/blog";
import { BlogContent } from "@src/types";
import Link from "next/link";
import { Wrapper } from "@src/components/Wrapper";
const BlogItems: NextPage<{ blogs: BlogContent[] }> = (props) => {
  return (
    <>
      <head></head>
      <main>
        <section>
          <Wrapper>
            <ul>
              {props.blogs.map((blog) => (
                <li key={blog.id}>
                  <Link href={`blog/${blog.id}`}>
                    <a>{blog.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Wrapper>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: {
    contents: BlogContent[];
  } = await getBlog();
  return {
    props: {
      blogs: data.contents,
    },
  };
};
export default BlogItems;
