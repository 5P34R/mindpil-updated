import React, { useState } from 'react'
import { VStack, Center, Button, Heading, Box } from 'native-base'

const QuizzQn = (props) => {
    
    const [color, setColor] = useState("gray.200")
    

    return (
        <VStack> 
                <Center p="20">
                       <Heading size="md">{props.question}</Heading>
                    <VStack mt={10} space={6}>

                        {
                            Object.keys(props.answers).map(e => 
                                <Button onPress={() => props.answerHandler(props.question, e)} p={4} rounded="lg" bg={color} px={6}><Heading size="sm" onPress={() => setColor("red-400")}>{e}</Heading></Button>
                            )
                        }
                    </VStack>
                </Center> 
            </VStack>
    )
}

export default QuizzQn