import { NextPage, GetStaticProps } from "next";
import { getCategory } from "@src/lib/blog";
import { Wrapper } from "@src/components/Wrapper";
import { BlogList } from "@src/components/BlogList";
import { CategoryList } from "@src/components/CategoryList";
//import styles from "@src/styles/pages/blog/BlogList.module.scss";

interface Props {
  name: string;
  content: {
    id: string;
    title: string;
    publishedAt: string;
    meta?: { image: { url: string } };
  }[];
}
const page: NextPage<{ sortedDatas: Props }> = (props) => {
  const pageTitle = "Diary";
  return (
    <>
      <Wrapper>
        <CategoryList />
      </Wrapper>
      <div className="diary_container">
        <Wrapper>
          <h1 className="diary_title">{pageTitle}</h1>
          <div className="diary_items_container">
            <BlogList items={props.sortedDatas.content} />
          </div>
        </Wrapper>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const path: string = "diary";
  const data = await getCategory(path);
  return {
    props: {
      sortedDatas: data.contents[0],
    },
  };
};
export default page;
