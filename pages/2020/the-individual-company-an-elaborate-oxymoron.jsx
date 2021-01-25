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
              The Individual Company, An Elaborate Oxymoron
            </Text>

            <Text classes="mb-8">
              My company's name is an oxymoron and also isn't an oxymoron.
            </Text>

            <blockquote className="mb-8">
              <Text classes="">Coming Soon</Text>
            </blockquote>
          </div>
        </div>
      </Post>
    </div>
  );
};

export default Page;
