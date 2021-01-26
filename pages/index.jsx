import React from "react";
import Layout from "../components/layouts/main";
import Text from "../components/Text";
import Link from "next/link";
import { posts } from "../posts";
import unique from "lodash/uniqBy";
import map from "lodash/map";
import filter from "lodash/filter";
import orderBy from "lodash/orderBy";
import isEmpty from "lodash/isEmpty";
import clsx from "clsx";
import FlipMove from "react-flip-move";

export function getStaticProps() {
  return {
    props: {
      posts: orderBy(
        posts.map((post) => ({
          ...post,
          url: `${new Date(post.created_at).getFullYear()}/${post.id}`,
        })),
        function (p) {
          return new Date(p?.created_at);
        },
        "desc"
      ),
    },
  };
}

const defaultCategory = "all";

export default function Home({ posts }) {
  const [selectedCategory, setSelectedCategory] = React.useState(
    defaultCategory
  );

  const [filteredPosts, setFilteredPosts] = React.useState(() => {
    return posts;
  });

  const categories = React.useMemo(() => {
    return ["all", ...unique(map(posts, "category"))];
  }, [posts]);

  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
      return;
    }

    setFilteredPosts(filter(posts, ["category", selectedCategory]));
  }, [selectedCategory]);

  return (
    <Layout>
      <div className="section space-y-12">
        <div className="flex flex-row justify-evenly">
          {map(categories, (category) => {
            return (
              <a
                key={`scope-selection-${category}`}
                onClick={() => {
                  setSelectedCategory(category);
                }}
                className={clsx(
                  category == selectedCategory && "active",
                  "scope-selection"
                )}
              >
                {category}
              </a>
            );
          })}
        </div>
        <FlipMove className="space-y-7 min-h-screen">
          {filteredPosts.map((post) => (
            <li key={post.id} className="flex flex-col">
              <Text variant="caption" classes="text-sm">
                {post.created_at}
              </Text>
              <Link href={post.url}>
                <a className="post-link">
                  <Text variant="headline">{post.title}</Text>
                </a>
              </Link>
              {!isEmpty(post.media) && post.media.type === "audio" && (
                <figure className="mt-2">
                  <audio controls className="w-full" src={post.media.src}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </figure>
              )}
              {!isEmpty(post.media) && post.media.type === "image" && (
                <img className="rounded-md mt-2" src={post.media.src} />
              )}
            </li>
          ))}
        </FlipMove>
      </div>
    </Layout>
  );
}
