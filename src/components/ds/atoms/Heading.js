import React from "react";

import Text from "./Text";

export const h1 = (props) => (
  <Text as="h1" textStyle="display1" color="black" m={0} mb="lg" {...props} />
);
export const h2 = (props) => (
  <Text as="h2" textStyle="display2" color="black" m={0} mb="md" {...props} />
);
export const h3 = (props) => (
  <Text as="h3" textStyle="display3" color="black" m={0} mb="sm" {...props} />
);

export default { h1, h2, h3 };
