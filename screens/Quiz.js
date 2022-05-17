import React from 'react'
import { Box, Center, Heading, Spacer, VStack } from 'native-base'

const QuizScreen = () => {
    return (
        <Box>
            <Box  bg="indigo.400" p="12" rounded="lg">
                <Center>
                    <Heading color="white">Take Quiz</Heading>
                </Center>
            </Box>
            <Spacer />
            <VStack>
                <Center p="20">
                    <Heading>Questions 1</Heading>
                    <VStack mt={10} space={6}>
                        <Box p={4} rounded="lg" bg="gray.200" px={20}>A</Box>
                        <Box p={4} rounded="lg" bg="gray.200" px={20}>B</Box>
                        <Box p={4} rounded="lg" bg="gray.200" px={20}>C</Box>
                        <Box p={4} rounded="lg" bg="gray.200" px={20}>D</Box>
                    </VStack>
                </Center>
                
            </VStack>
        </Box>
        
    )
}

export default QuizScreen