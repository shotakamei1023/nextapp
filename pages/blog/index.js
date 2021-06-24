import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/BlogList.module.css";


const BlogListPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | MyWebsite</title>
      </Head>

      <h2>Blog</h2>

      <ul className={styles.list}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <time dateTime={post.date}>{post.date}</time>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const dataDir = "data";
  const fileNames = fs.readdirSync(dataDir);

  // ブログ記事のメタデータ配列を作る処理を追加
  const posts = fileNames
    .map((fileName) => {
      const postPath = path.join(dataDir, fileName);
      const file = matter.read(postPath);
      console.log(file.data.title);
      return {
        // ファイル名をそのままslugに流用する
        slug: fileName.replace(/\.md$/, ""),
        // front matterの内容は .data から読み取れる
        title: file.data.title,
        date: file.data.date,
      };
    })
    // 日付による降順ソート処理も追加
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  // ページ側へ記事データを渡すためにreturnする
  return {
    props: { posts },
  };
};

export default BlogListPage;