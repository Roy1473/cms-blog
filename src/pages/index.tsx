import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <svg
          width="501.1"
          height="72.602"
          viewBox="0 0 501.1 72.602"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 374.1 71.101 L 374.1 1.501 L 423.1 1.501 L 423.1 5.201 L 377.8 5.201 L 377.8 33.401 L 417.2 33.401 L 417.2 37.101 L 377.8 37.101 L 377.8 67.401 L 423.1 67.401 L 423.1 71.101 L 374.1 71.101 Z M 301 71.101 L 297.3 71.101 L 297.3 1.501 L 301 1.501 L 301 34.401 L 347.2 34.401 L 347.2 1.501 L 350.9 1.501 L 350.9 71.101 L 347.2 71.101 L 347.2 38.101 L 301 38.101 L 301 71.101 Z M 227.6 1.501 L 272.7 1.501 L 272.7 5.201 L 251.9 5.201 L 251.9 67.401 L 272.7 67.401 L 272.7 71.101 L 227.6 71.101 L 227.6 67.401 L 248.3 67.401 L 248.3 5.201 L 227.6 5.201 L 227.6 1.501 Z M 0 71.001 L 0 1.401 L 4 1.401 L 28.3 44.401 L 52.5 1.401 L 56.2 1.401 L 56.2 71.001 L 0 71.001 Z M 187.2 46.401 L 204.9 71.101 L 200.5 71.101 L 183.4 47.101 L 180.2 47.201 L 155.1 47.201 L 155.1 71.101 L 151.4 71.101 L 151.4 1.501 L 177.9 1.501 A 59.758 59.758 0 0 1 181.024 1.578 Q 182.56 1.659 183.905 1.823 A 30.566 30.566 0 0 1 185.45 2.051 A 24.562 24.562 0 0 1 189.348 3.053 A 20.896 20.896 0 0 1 191.2 3.801 Q 197.2 6.601 200.65 12.101 Q 204.1 17.601 204.1 24.301 Q 204.1 32.101 199.35 38.251 Q 194.6 44.401 187.2 46.401 Z M 3.7 8.301 L 3.7 67.401 L 52.5 67.401 L 52.5 8.901 L 30 48.501 L 26.5 48.501 L 3.7 8.301 Z M 443.1 1.501 L 447.5 1.501 L 472.2 38.701 L 496.7 1.501 L 501.1 1.501 L 474 42.601 L 474 71.101 L 470.3 71.101 L 470.3 42.601 L 443.1 1.501 Z M 130.8 28.701 L 130.8 43.901 Q 130.8 51.701 126.95 58.301 Q 123.1 64.901 116.5 68.751 Q 109.9 72.601 102.1 72.601 Q 94.3 72.601 87.7 68.751 Q 81.1 64.901 77.25 58.301 Q 73.4 51.701 73.4 43.901 L 73.4 28.701 Q 73.4 20.901 77.25 14.301 Q 81.1 7.701 87.7 3.851 Q 94.3 0.001 102.1 0.001 Q 109.9 0.001 116.5 3.851 Q 123.1 7.701 126.95 14.301 Q 130.8 20.901 130.8 28.701 Z M 127.1 43.901 L 127.1 28.701 Q 127.1 21.901 123.75 16.151 Q 120.4 10.401 114.65 7.051 Q 108.9 3.701 102.1 3.701 Q 95.3 3.701 89.55 7.051 Q 83.8 10.401 80.45 16.151 Q 77.1 21.901 77.1 28.701 L 77.1 43.901 Q 77.1 50.701 80.45 56.451 Q 83.8 62.201 89.55 65.551 Q 95.3 68.901 102.1 68.901 Q 108.9 68.901 114.65 65.551 Q 120.4 62.201 123.75 56.451 A 24.49 24.49 0 0 0 127.1 43.901 Z M 155.1 43.501 L 181.2 43.501 Q 186.4 43.501 190.8 40.901 Q 195.2 38.301 197.8 33.901 Q 200.4 29.501 200.4 24.301 Q 200.4 18.501 197.35 13.801 Q 194.3 9.101 188.9 6.801 Q 185 5.201 177.9 5.201 L 155.1 5.201 L 155.1 43.501 Z" />
        </svg>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
