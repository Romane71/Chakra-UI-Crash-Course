import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      color: "black",
      bg: "blue.200",
    },
  };
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI component
      </Heading>
      <Text marginLeft="30px">Hi there</Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Hi there
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is Romane!</Text>
      </Box>
      <Box sx={boxStyles}>Hello, Ninjas!</Box>
    </Container>
  );
}
