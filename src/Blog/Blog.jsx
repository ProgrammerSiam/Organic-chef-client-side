import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
  return (
    <div className="App">
      <div className="text-center">
        <Pdf targetRef={ref} filename="Blog Question and Answer.pdf">
          {({ toPdf }) => (
            <button className="btn mt-5 btn-outline-dark" onClick={toPdf}>
              Download This Page
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div className="container bg-light border py-5  mt-5">
          <h1 className="text-center text-danger">some common question </h1>
          <div className="my-5">
            <h4>
              <small>1</small> How to validate React props using PropTypes
            </h4>
            <p>
              <strong>Ans :</strong> PropTypes is a library included in React
              that enables typechecking of props passed to a React component. By
              using PropTypes, you can ensure that the props passed to your
              components are of the correct type, and help to prevent bugs
              caused by incorrect or missing prop values.
            </p>
          </div>
          <div className="my-5">
            <h4>
              <small>2</small> Tell us the difference between nodejs and express
              js.
            </h4>
            <p>
              <strong>Ans :</strong> Developers describe ExpressJS as "Sinatra
              inspired web development framework for node.js -- insanely fast,
              flexible, and simple". Express is a minimal and flexible node.js
              web application framework, providing a robust set of features for
              building single and multi-page, and hybrid web applications. On
              the other hand, Node.js is detailed as "A platform built on
              Chrome's JavaScript runtime for easily building fast, scalable
              network applications". Node.js uses an event-driven, non-blocking
              I/O model that makes it lightweight and efficient, perfect for
              data-intensive real-time applications that run across distributed
              devices.
              <br />
              1. ExpressJS belongs to "Microframeworks (Backend)" category of
              the tech stack, while Node.js can be primarily classified under
              "Frameworks (Full Stack)".
              <br />
              2. "Simple", "Node.js" and "Javascript" are the key factors why
              developers consider ExpressJS; whereas "Npm", "Javascript" and
              "Great libraries" are the primary reasons why Node.js is favored.
              <br />
              3. ExpressJS and Node.js are both open source tools. ExpressJS
              with 44.6K GitHub stars and 7.48K forks on GitHub appears to be
              more popular than Node.js with 35.5K GitHub stars and 7.78K GitHub
              forks.
              <br />
              4. According to the StackShare community, Node.js has a broader
              approval, being mentioned in 4104 company stacks & 4042 developers
              stacks; compared to ExpressJS, which is listed in 854 company
              stacks and 790 developer stacks
            </p>
          </div>
          <div className="my-5">
            <h4>
              <small>3</small> What is a custom hook, and why will you create a
              custom hook?
            </h4>
            <p>
              <strong>Ans :</strong> Custom React JS hooks are reusable
              functions that a React JS software developer can use to add
              special and unique functionality to the React applications.
              Usually, if there is a requirement to add a feature, one can
              install a third-party library and solve the problem. But what if
              there is no such library with hooks that can be used? This problem
              is solved by using custom React JS hooks. A custom hook is a
              special JavaScript function whose name starts with ‘use’ and can
              be used to call other hooks. Let’s take a look at some major
              differences between a custom React JS hook and React JS
              components: A custom hook does not require a specific signature. A
              software developer can choose what argument the custom hook has
              and what should the argument return. A custom hook always starts
              with the name ‘use’..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
