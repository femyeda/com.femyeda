import React from "react";
import Post from "../../components/layouts/post";
import Text from "../../components/Text";

const Page = () => {
  return (
    <div>
      <Post>
        <div className="section">
          <div className="leading-loose tracking-tight">
            <Text variant="headline" classes="mb-8">
              Texas, Illinois, Ohio, California Could Feed The Planet
              Indefinitely
            </Text>

            <blockquote className="mb-8">
              <Text classes="">
                Humans would produce exponentially, with devastating
                consequences for humankind... so being "less bad" is no good
                This will be an ongoing project.
              </Text>
            </blockquote>

            <Text classes="mb-8">
              So I have this theory. Four states alone could feed the planet til
              the end of time. First there are somethings I need to know.
            </Text>
            <ul className="mb-8">
              <li>
                <Text>- Land mass of each of the four states</Text>
              </li>
              <li>
                <Text>- Useable land mass of each of the four states</Text>
              </li>
              <li>
                <Text>
                  - Current production efficiency of each of the four states
                </Text>
              </li>
              <li>
                <Text>
                  - What naturally grows best in each of the four states
                </Text>
              </li>
            </ul>

          </div>
        </div>
      </Post>
    </div>
  );
};

export default Page;
