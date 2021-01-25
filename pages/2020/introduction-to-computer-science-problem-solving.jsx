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
              Introduction to Computer Science Problem Solving
            </Text>

            <Text classes="mb-8">
              think of your assignment in cs as a word problem. and you are to
              solve it using the available operations we've built up so far. in
              math we only have a set number of operations to perform. if you
              don't believe it I can name them all right now (note about the
              accessibility of knowledge). so we are tovery throughly analyze
              the problem for it's root or underlying problems then reduce the
              problem into a composable set of mathematical operations that then
              lead to your desired solution. and there is an accountability to
              deliver a correct solution (note on correctness). notice a correct
              solution not the correct solution, the one you thought of at that
              time is one of many possible solutions. and your experience and
              expertise as a problem solver is choosing the nearest correct /
              ideal solution given your constraints. NOT REQUIREMENTS!through
              solving countless problems you should develop a bank of best
              practices and positive shortcuts and design patterns that will
              enable you to solve more complex solutions at an even shorter
              development time. some of which will apply very much so across
              many domains. and most of which will apply very intrinsically to
              the underlying nature of programming a computers and the kinship
              to mathematics.
            </Text>
            <Text classes="mb-8">
              for example: the use of queues and scheduling algorithms at the
              operating level to maximize efficiency of all computers.
            </Text>
            <Text classes="mb-8">
              I stay that parts of the operating system architecture flipped,
              cropped, and rotated is the ideal solution for efficiency. and the
              only way to make that even better is more hardware (Amazon
              supplied every one with endless computing power) which in turns
              allow for more parallelism.
            </Text>
          </div>
        </div>
      </Post>
    </div>
  );
};

export default Page;
