import React from "react";
import Post from "../../components/layouts/post";
import Text from "../../components/Text";

import Header from "../../components/post/header";

const date = "January 25, 2021";

const Page = () => {
  return (
    <div>
      <Post>
        <div className="section">
          <div className="leading-loose tracking-tight">
            <Header title="Steve Jobs Secrets of Life" date={date} />

            <figure className="mb-8">
              <audio
                controls
                className="w-full"
                src="/steve-jobs-secrets-of-life.mp3"
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>

            <blockquote className="mb-8">
              <Text classes="mb-8">
                so thing thing i would say is when you grow up you tend to get
                told that the world is the way it is
              </Text>
              <Text classes="mb-8">
                and your life is just to live your life inside the world
              </Text>
              <Text classes="mb-8">
                try not to bash into the walls too much try
              </Text>
              <Text classes="mb-8">
                to have a nice family life have fun save a little money
              </Text>
              <Text classes="mb-8">
                but that's a very limited Life life can be much broader
              </Text>
              <Text classes="mb-8">
                once you discover one simple fact and that is everything around
                you that you call life was made up by people that were no
                smarter than you
              </Text>
              <Text classes="mb-8">
                and you can change it. you can influence it. you can build your
                own things that other people can use.
              </Text>

              <Text classes="mb-8">
                and the minute that you understand that you can poke Life and
                actually something will if you push in something will pop out
                the other side
              </Text>
              <Text classes="mb-8">that you can change it you can mold it</Text>
              <Text classes="mb-8">
                that's maybe the most important thing is to shake off this
                erroneous notion that life is there and you're just gonna live
                in it
              </Text>
              <Text classes="mb-8">
                versus embrace it change it improve it make your mark upon it
              </Text>
              <Text classes="mb-8">
                i think thats very important and however you learn that once you
                learn it you'll want to change life and make it better cuz' it's
                kinda messed up in a lot of ways once you learn that you'll
                never be the same again
              </Text>
            </blockquote>
          </div>
        </div>
      </Post>
    </div>
  );
};

export default Page;
