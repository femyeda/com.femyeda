import Head from "next/head";
import Header from "../header";
import Text from "../Text";

const Main = ({ children, headerActive }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Femi Odugbesan's Blog</title>
      </Head>

      <Header headerActive={headerActive} />

      <main className="main-content p-6 flex flex-col flex-wrap content-center justify-center">
        {children}
      </main>

      <footer className="p-6 sm:py-10 md:py-16 flex flex-col flex-wrap content-center justify-center">
        {/* <div className="section">
          <div className="leading-loose tracking-tight md:mb-16">
            <div className="max-w-7xl py-12 ">
              <h2 className="inline text-3xl font-extrabold tracking-tight sm:block sm:text-4xl">
                Want product news and updates?
              </h2>
              <form className="mt-8 sm:flex">
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  id="emailAddress"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 bg-gray-600 text-white placeholder-gray-100 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}

        <div className="section py-12">
          <div className="leading-loose tracking-tight">
            <Text variant="subheadline" classes="my-4">
              About Me
            </Text>
            <Text variant="caption2">
              CEO{" "}
              <a href="https://twitter.com/heycirclely" target="_blank">
                @heycirclely
              </a>
            </Text>
            
          </div>
        </div>

        {/* <div className="section py-12">
          <div className="leading-loose tracking-tight md:mb-16">
            <Text variant="subheadline" classes="my-4">
              Contact Me
            </Text>

            <ul className="flex flex-wrap justify-between flex-row md:flex-col">
              <li>
                <a href="#" className="nav mx-2 md:mx-0">
                  <Text>Twitter</Text>
                </a>
              </li>
              <li>
                <a href="#" className="nav mx-2 md:mx-0">
                  <Text>Instagram</Text>
                </a>
              </li>
              <li>
                <a href="#" className="nav mx-2 md:mx-0">
                  <Text>Dribbble</Text>
                </a>
              </li>
              <li>
                <a href="#" className="nav mx-2 md:mx-0">
                  <Text>etc</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      */}
      </footer>

      {/* <!-- Pin to top right corner --> */}
      {/* <div className="fixed top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
      </div> */}
    </>
  );
};

export default Main;
