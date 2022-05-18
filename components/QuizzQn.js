import React, { useState } from 'react'
import { VStack, Center, Button, Heading, Box } from 'native-base'

const QuizzQn = (props) => {
    
    // const data = { 
    //     questions: props.question,
    //     answers : { 
    //         value: Object.keys(props.answers).forEach(key => props.answers[key] === undefined && delete props.answers[key]),
    //         key:  Object.keys(props.answers)
    //     }
    // }
    // console.log(props.answers)
    // Object.keys(props.answers).forEach(e => console.log(e))
    return (
        <VStack>
                      
                <Center p="20">
                       <Heading size="md">{props.question}</Heading>
                    <VStack mt={10} space={6}>
                        {
                            Object.keys(props.answers).forEach(e => 
                                <Box p={4} rounded="lg" bg="gray.200" px={20}>{e}</Box>
                            )
                        }

                            <Box p={4} rounded="lg" bg="gray.200" px={20}>B</Box>
                            <Box p={4} rounded="lg" bg="gray.200" px={20}>C</Box>
                            <Box p={4} rounded="lg" bg="gray.200" px={20}>D</Box>
                    </VStack>
                </Center> 
                
            </VStack>
    )
}

export default QuizzQn