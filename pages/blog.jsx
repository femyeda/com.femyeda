import React from "react";
import Layout from "../components/layouts/main";
import Text from "../components/Text";

const blog = () => {
  return (
    <Layout>
      <div className="section">
        <div className="leading-loose tracking-tight">
          <Text variant="headline">Post Title</Text>

          <Text classes="mb-8">
            This template is inspired by the amazing{" "}
            <a
              href="https://minimalissimo.shop/product/minimalist-writer-ii"
              target="_blank"
            >
              https://minimalissimo.shop/product/minimalist-writer-ii
            </a>{" "}
            created by <a href="https://manuelmoreale.com/">Manuel Moreale</a>.
          </Text>

          <Text classes="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{" "}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </Text>

          <Text classes="mb-8">
            Netus et malesuada fames ac turpis egestas sed. Sociis natoque
            penatibus et magnis dis. Pulvinar etiam non quam lacus suspendisse
            faucibus. Vulputate mi sit amet mauris commodo quis imperdiet massa
            tincidunt. Eget nullam non nisi est sit amet facilisis. Fusce ut
            placerat orci nulla pellentesque dignissim enim sit amet. Vulputate
            mi sit amet mauris commodo quis. Vestibulum mattis ullamcorper velit
            sed ullamcorper morbi tincidunt. Feugiat pretium nibh ipsum
            consequat nisl vel pretium lectus quam. Enim blandit volutpat
            maecenas volutpat blandit. Scelerisque fermentum dui faucibus in
            ornare. Ultricies tristique nulla aliquet enim tortor at auctor urna
            nunc. Id interdum velit laoreet id. Ut lectus arcu bibendum at
            varius vel pharetra vel turpis.
          </Text>

          <Text classes="mb-8">
            A diam sollicitudin tempor id eu. Lectus vestibulum mattis
            ullamcorper velit sed ullamcorper. Sit amet facilisis magna etiam
            tempor. Non diam phasellus vestibulum lorem sed risus. Leo vel
            fringilla est ullamcorper eget nulla facilisi etiam. Quam quisque id
            diam vel quam elementum pulvinar etiam. Eu volutpat odio facilisis
            mauris. Molestie ac feugiat sed lectus vestibulum mattis. In vitae
            turpis massa sed elementum tempus egestas sed sed. Sed id semper
            risus in hendrerit gravida rutrum quisque non. Quis lectus nulla at
            volutpat diam ut venenatis. Ultrices eros in cursus turpis massa
            tincidunt dui. Phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt tortor aliquam. Lobortis mattis aliquam faucibus purus.
            Egestas sed tempus urna et pharetra pharetra. Tellus pellentesque eu
            tincidunt tortor aliquam nulla.
          </Text>

          <Text classes="mb-8">
            Cras fermentum odio eu feugiat pretium nibh ipsum. Integer vitae
            justo eget magna fermentum iaculis eu non diam. Tellus molestie nunc
            non blandit massa enim nec dui. Ullamcorper morbi tincidunt ornare
            massa eget egestas. Orci a scelerisque purus semper eget duis at
            tellus at. Consequat id porta nibh venenatis cras sed. Enim eu
            turpis egestas pretium. Mi in nulla posuere sollicitudin aliquam
            ultrices sagittis orci. Dui vivamus arcu felis bibendum. Eu
            consequat ac felis donec et odio. Ultrices gravida dictum fusce ut
            placerat orci nulla. Leo urna molestie at elementum eu facilisis.
            Vulputate mi sit amet mauris commodo. Eu consequat ac felis donec et
            odio pellentesque.
          </Text>
        </div>
      </div>

      <div className="section">
        <div className="leading-loose tracking-tight">
          <p className="font-bold my-4">About Me</p>

          <p className="mb-8">
            Arcu risus quis varius quam quisque id diam vel. Consectetur
            adipiscing elit ut aliquam purus sit amet. Nibh tortor id aliquet
            lectus proin nibh.{" "}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="leading-loose tracking-tight md:mb-16">
          <p className="font-bold my-4">Contact Me</p>

          <ul className="flex flex-wrap justify-between flex-row md:flex-col">
            <li>
              <a href="#" className="nav mx-2 md:mx-0">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="nav mx-2 md:mx-0">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="nav mx-2 md:mx-0">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="nav mx-2 md:mx-0">
                etc
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
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
                autocomplete="email"
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
      </div>
    </Layout>
  );
};

export default blog;
