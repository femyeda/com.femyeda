import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="md:max-w-xl p-6">
      <Link href="/">
        <a className="logo font-bold" href="/">
          femyeda.com
        </a>
      </Link>

      <nav className="nav flex flex-row space-x-2">
        {/* <a
          className="src"
          target="_blank"
          href="https://github.com/rauchg/blog"
        >
          Source
        </a> */}
        <a
          className="flex flex-row space-x-4"
          target="_blank"
          href="https://twitter.com/femyeda"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
          </svg>
        </a>
      </nav>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav {
          padding: 10px 0 10px 5px;
        }
        nav a {
          padding: 6px 10px;
          display: inline-block;
          text-decoration: none;
          margin-right: 15px;
        }
        nav a.src {
          font-size: 13px;
        }
        nav a.follow {
          font-weight: bold;
          color: #fff;
          background: #000;
          font-size: 13px;
        }
        a.logo {
          text-decoration: none;
          display: inline-flex;
          transition: 150ms background-color ease;
          padding: 5px;
        }
        @media (any-hover: hover) {
          a.logo:hover {
            background-color: var(--link-highlight);
          }
          a.logo:active {
            background-color: #fff445;
          }
        }
        @media (min-width: 500px) {
          header {
            margin: auto;
          }
          nav {
            padding: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default header;
