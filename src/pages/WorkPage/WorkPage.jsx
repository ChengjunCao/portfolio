import React from "react";
import { Box, Flex } from "../../components/ds";
import { Heading, Text } from "../../components/ds";
export default function WorkPage() {
  return (
    <Flex mt="120px" mx="48px" flexDirection="column">
      <Flex alignItems="center">
        <Heading.h2 color="#e85a4f" mr="8px">
          ActivateStaff -
        </Heading.h2>
        <a
          href="https://activatestaff.com/products/"
          target="_blank"
          rel="noreferrer"
        >
          <p style={{ fontSize: 20, textDecoration: "underline" }}>
            Click to see Product Examples
          </p>
        </a>
      </Flex>

      <Box mx="100px">
        <Text.body1 fontWeight="bold">
          Frontend Developer building and maintaining complex projects with
          ownership across multiple products and features.
        </Text.body1>
      </Box>
      <Flex>
        <Box mx="24px">
          <Text fontSize={[1, 2, 3]} fontWeight="bold" mb="24px">
            Developed and maintained features on web apps (recruiter & client
            portals) using React.js to provide thousands of staffing agency
            clients with the most efficient workflow to make more placements and
            build better relationships with candidates.
          </Text>
          <Box alignItems="center">
            <img
              mx="auto"
              height="300px"
              width="auto"
              src="/images/web-app.png"
              alt="web"
            />
          </Box>
        </Box>

        <Box mx="24px">
          <Text fontSize={[1, 2, 3]} fontWeight="bold" mb="24px">
            Developed and maintained features on mobile app (candidate app)
            using React Native to give thousands of staffing candidates the best
            experience they are looking for and help them find work, track time,
            and engage with their agency with the app.
          </Text>
          <img
            mx="auto"
            height="300px"
            width="auto"
            src="/images/mobile-app.png"
            alt="mobile"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
