import React from "react";
import { Box, Flex } from "../../components/ds";
import { Heading, Text } from "../../components/ds";
export default function WorkPage() {
  return (
    <Flex
      mt="120px"
      mx="48px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="center" alignItems="center">
        <Heading.h1 color="#e85a4f" mr="16px">
          ActivateStaff -
        </Heading.h1>
        <a
          href="https://activatestaff.com/products/"
          target="_blank"
          rel="noreferrer"
        >
          <p style={{ fontSize: 28, textDecoration: "underline" }}>
            Click to see Product Examples
          </p>
        </a>
      </Flex>

      <Flex justifyContent="center" alignItems="center">
        <Heading.h2>(Work Sample available upon request)</Heading.h2>
      </Flex>

      <Box width={1 / 2}>
        <ul>
          <li>
            <Heading.h3 mb="16px">
              Implemented and maintained 20+ features on React web apps
              (recruiter portals) and 10+ features on React Native mobile app
              (candidate app), providing staffing agency clients and candidates
              with the most efficient workflow and best work relationships.
            </Heading.h3>
          </li>
          <li>
            <Heading.h3 mb="16px">
              Experienced in making Rest API calls to retrieve data from
              endpoints and display it using React data table libraries.
            </Heading.h3>
          </li>
          <li>
            <Heading.h3 mb="16px">
              Worked closely with product manager, UX designer and backend
              developers to turn ideas into features in a timely manner.
              Experienced in Figma and styled-components for better UI
              implementation and clean code.
            </Heading.h3>
          </li>
          <li>
            <Heading.h3 mb="16px">
              Experienced in using feature flags across web and mobile apps to
              display targeted features to different staffing agencies on their
              requests.
            </Heading.h3>
          </li>
          <li>
            <Heading.h3>
              Contributed to company's frontend styleguides and jest
              documentations.
            </Heading.h3>
          </li>
        </ul>
      </Box>
    </Flex>
  );
}
