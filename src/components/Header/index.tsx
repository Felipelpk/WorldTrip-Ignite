import { Flex, Text, Img } from "@chakra-ui/react";

export function Header(){
  return (
    <>
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="24"
        mx="auto"
        px="6"
        align="center"
        justify="center"
      >
        <img src="assets/images/Logo.svg" alt="World Trip"/>
      </Flex>

      <Flex  justify="center" align="center">
          <Flex position="absolute" direction="row" align="center">
          <Flex direction="column" mx="40">
            <Text 
              fontSize={["2xl","3xl"]}
              fontWeight="600"
              fontFamily='Poppins'
              textAlign="left"
              mb="7"
              color="#FFF"
              // p="10"
            > 5 Continentes, <br/>
            infinitas possibilidades.</Text>
            <Text 
              fontSize="md"
              fontWeight="300"
              fontFamily='Poppins'
              color="#FFF"
              // p="10"
            >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>
              <Img mt={150} src="assets/images/Airplane.svg" alt=""/>
          </Flex>
          <Flex  minWidth={1480} w="100%">
            <Img w="100%" src="assets/images/Background.png" alt=""/>
          </Flex>
      </Flex>
      
      {/* <Flex 
        justify="center"
        align="center"
      >
        <Flex
        direction="column"
        position="absolute"
        w={1120}
        maxHeight={400}
        >
          <Text 
            fontSize="3xl"
            fontWeight="600"
            fontFamily='Poppins'
            // p="10"
          >
            5 Continentes, <br/>
            infinitas possibilidades.</Text>
          <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </p>
        </Flex>
       
      </Flex>
      <img src="assets/images/Background.png" alt=""/> */}
    </>
  )
}