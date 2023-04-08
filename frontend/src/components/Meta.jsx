import { Helmet } from "react-helmet";
import React from "react";

const Meta = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <tittle>{props.tittle}</tittle>
    </Helmet>
  );
};

export default Meta;
