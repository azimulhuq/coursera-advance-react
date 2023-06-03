import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="xl">
      <Image
        src={imageSrc}
        objectFit="cover"
        alt="project image"
        borderRadius="xl"
      />
      <VStack spacing={8} alignItems="flex-start" p={6}>
        <Heading color="black">{title}</Heading>
        <Text color="blackAlpha.700">{description}</Text>
        <HStack color="black">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
