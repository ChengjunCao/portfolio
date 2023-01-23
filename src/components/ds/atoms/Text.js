import React from "react";
import { space, color, textStyle, typography } from "styled-system";
import { Text as RText } from "rebass/styled-components";

import styled from "styled-components/macro";

const Text = styled(RText)`
  ${textStyle};
  ${color};
  ${space};
  ${typography};
`;

Text.body1 = (props) => (
  <Text as="h4" textStyle="body1" color="black" {...props} />
);

Text.body2 = (props) => (
  <Text as="h5" textStyle="body2" color="black" {...props} />
);

Text.caption = (props) => <Text as="small" textStyle="caption" {...props} />;

Text.micro = (props) => (
  <Text as="small" textStyle="micro" mb="xs" {...props} />
);

Text.p = (props) => <Text as="p" mb="xs" color="black" {...props} />;

Text.span = (props) => <Text as="span" {...props} />;

export default Text;
