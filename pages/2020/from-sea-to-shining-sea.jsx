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
              From sea to shining sea
            </Text>
            <blockquote className="mb-8">
              <Text classes="">
                From sea to shining sea, the sun never setting on the Bezo -
                Zuckerberg empire.
              </Text>
            </blockquote>

            <Text classes="mb-8">
              What was once true of the British empire, is now true the of super
              cooperations Amazon & Facebook. We’ve seen the affects a selfish
              and undying pursuit of gold and glory. And if this expansion is
              allowed to continue the world will be covered, sea to shining sea
              in the grandest amazon mankind has ever seen. Not like the rain
              forest that cover miles of Brazil, with trees, birds, and wild
              life. But a digital amazon filled with drones and spies and
              cameras that know everything you do. Everything you do from A to
              Z. From sea to shining sea, the sun never setting on the Bezo -
              Zuckerberg empire.
            </Text>
          </div>
        </div>
      </Post>
    </div>
  );
};

export default Page;
