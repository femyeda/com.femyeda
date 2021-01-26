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
      
        <a
          className="flex flex-row space-x-4"
          target="_blank"
          href="https://lichess.org/@/femyeda2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            width="1em"
            viewBox="-12 -12 74 74"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linejoin="round"
              d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"
            />
          </svg>
        </a>

        <a className="flex flex-row space-x-4" target="_blank">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
