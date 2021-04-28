import Link from "next/link";
import { Wrapper } from "@src/components/Wrapper";
import { TwitterIcon } from "@src/components/icons/TwitterIcon";
import styles from "@src/styles/components/Header.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={styles.header_layout}>
      <Wrapper>
        <div className={styles.header_content}>
          <Link href="/">
            <a>
              <img src="/avatar/profile.jpeg" alt="icon" width="40" />
              <svg
                width="180"
                height="25"
                viewBox="0 0 309.375 39.375"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 264.375 39.375 L 225 39.375 L 225 0 L 264.375 0 L 264.375 5.625 L 236.25 5.625 L 236.25 16.875 L 258.75 16.875 L 258.75 22.5 L 236.25 22.5 L 236.25 33.75 L 264.375 33.75 L 264.375 39.375 Z M 11.25 39.375 L 0 39.375 L 0 0 L 11.25 0 L 11.25 5.625 L 16.875 5.625 L 16.875 11.25 L 22.5 11.25 L 22.5 5.625 L 28.125 5.625 L 28.125 0 L 39.375 0 L 39.375 39.375 L 28.125 39.375 L 28.125 16.875 L 22.5 16.875 L 22.5 28.125 L 16.875 28.125 L 16.875 16.875 L 11.25 16.875 L 11.25 39.375 Z M 191.25 39.375 L 180 39.375 L 180 0 L 191.25 0 L 191.25 16.875 L 208.125 16.875 L 208.125 0 L 219.375 0 L 219.375 39.375 L 208.125 39.375 L 208.125 22.5 L 191.25 22.5 L 191.25 39.375 Z M 101.25 39.375 L 90 39.375 L 90 0 L 123.75 0 L 123.75 5.625 L 129.375 5.625 L 129.375 22.5 L 118.125 22.5 L 118.125 28.125 L 123.75 28.125 L 123.75 33.75 L 129.375 33.75 L 129.375 39.375 L 112.5 39.375 L 112.5 33.75 L 106.875 33.75 L 106.875 28.125 L 101.25 28.125 L 101.25 39.375 Z M 174.375 39.375 L 140.625 39.375 L 140.625 33.75 L 151.875 33.75 L 151.875 5.625 L 140.625 5.625 L 140.625 0 L 174.375 0 L 174.375 5.625 L 163.125 5.625 L 163.125 33.75 L 174.375 33.75 L 174.375 39.375 Z M 309.375 39.375 L 275.625 39.375 L 275.625 33.75 L 286.875 33.75 L 286.875 5.625 L 275.625 5.625 L 275.625 0 L 309.375 0 L 309.375 5.625 L 298.125 5.625 L 298.125 33.75 L 309.375 33.75 L 309.375 39.375 Z M 78.75 39.375 L 50.625 39.375 L 50.625 33.75 L 45 33.75 L 45 5.625 L 50.625 5.625 L 50.625 0 L 78.75 0 L 78.75 5.625 L 84.375 5.625 L 84.375 33.75 L 78.75 33.75 L 78.75 39.375 Z M 56.25 5.625 L 56.25 33.75 L 73.125 33.75 L 73.125 5.625 L 56.25 5.625 Z M 101.25 5.625 L 101.25 22.5 L 112.5 22.5 L 112.5 16.875 L 118.125 16.875 L 118.125 5.625 L 101.25 5.625 Z" />
              </svg>
            </a>
          </Link>
          <div className={styles.header_links}>
            <Link href="/about">
              <a className={styles.header_links_item}>about</a>
            </Link>
            <Link href="/blog">
              <a className={styles.header_links_item}>blog</a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
