import * as React from "react";

const Pel = (props) => {
  return <p className=" text-red-500">{props.children}</p>;
};

const IndexPage = () => {
  return (
    <>
      <Pel>
        <p>gatsby</p>
        <p>gatsby</p>
      </Pel>
    </>
  );
};

export default IndexPage;
