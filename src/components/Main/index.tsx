import { Flex, Text, Icon, Stack } from "@chakra-ui/react";
import {FaCocktail, FaRegBuilding} from 'react-icons/fa'
import {GiSurfBoard, GiGreekTemple, GiEarthAmerica} from 'react-icons/gi'

export function Main() {
  return (
    <>
    <Flex
      marginTop={20}
      // mx="center"
      justify="center"
      align="center"
    >
      <Flex mr={90}>
      <Stack spacing="4" direction="column" justify="center" align="center">
        <Icon as={FaCocktail} w="85px" h="85" color='#FFBA08'/>
        <Text color="#47585B" fontFamily="Open Sans" fontSize={24} fontWeight="semibold">vida noturna</Text>
      </Stack>
      </Flex>
      <Flex mr={90}>
      <Stack spacing="4" direction="column" justify="center" align="center">
        <Icon as={GiSurfBoard} w="85px" h="85" color='#FFBA08'/>
        <Text color="#47585B" fontFamily="Open Sans" fontSize={24} fontWeight="semibold">praia</Text>
      </Stack>
      </Flex>
      <Flex mr={90}>
      <Stack spacing="4" direction="column" justify="center" align="center">
        <Icon as={FaRegBuilding} w="85px" h="85" color='#FFBA08'/>
        <Text color="#47585B" fontFamily="Open Sans" fontSize={24} fontWeight="semibold">moderno</Text>
      </Stack>
      </Flex>
      <Flex mr={90}>
      <Stack spacing="4" direction="column" justify="center" align="center">
        <Icon as={GiGreekTemple} w="85px" h="85" color='#FFBA08'/>
        <Text color="#47585B" fontFamily="Open Sans" fontSize={24} fontWeight="semibold">clássico</Text>
      </Stack>
      </Flex>
      <Flex mr={90}>
      <Stack spacing="4" direction="column" justify="center" align="center">
        <Icon as={GiEarthAmerica} w="85px" h="85" color='#FFBA08'/>
        <Text color="#47585B" fontFamily="Open Sans" fontSize={24} fontWeight="semibold">e mais...</Text>
      </Stack>
      </Flex>
      </Flex>
      <Flex justfy="center" align="center" maxWidth={90} mt={20} mb={14} mx="auto" borderTop="2px solid #47585B">
      </Flex>
    <Flex direction="column" align="center" justify="center" textAlign="center">
      <Text 
        color="#47585B" 
        fontFamily="Poppins" 
        fontWeight="medium" 
        fontSize={36} 
        // mt={132}
        >
          Vamos nessa?<br/> Então escolha seu continente
        </Text>
    </Flex>
    </>
  )
}