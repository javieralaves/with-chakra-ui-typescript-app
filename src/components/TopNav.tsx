import { Flex, HStack, Input, useColorModeValue as mode } from '@chakra-ui/react'
import { Logo } from './Logo'

export const TopNav = () => {
    return (
        <Flex 
            align="center" 
            bg={mode('gray.100', 'gray.800')} 
            w="full" 
            h="64px"
            px="64px" >
            <HStack spacing="4">
                <Logo />
                <p>Search</p>
                <p>Nav links</p>
            </HStack>
        </Flex>
    )
}
