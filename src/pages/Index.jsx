import { Container, Text, VStack, Image } from "@chakra-ui/react";
import CuteDogImage from "/images/cute-dog.png";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Angry Banana Page</Text>
        <Image src="/images/angry-banana-tophat.png" alt="Angry Banana with Tophat" boxSize="300px" />
        <Text>Enjoy this unique artwork of an angry banana wearing a tophat!</Text>
        <Image src={CuteDogImage} alt="Cute Dog" boxSize="300px" />
      </VStack>
    </Container>
  );
};

export default Index;