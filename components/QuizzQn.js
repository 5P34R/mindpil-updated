import React, { useState } from 'react'
import { VStack, Center, Button, Heading, Box } from 'native-base'

const QuizzQn = (props) => {
    
    const [data, setData] = useState({})
    // const data = { 
    //     questions: props.question,
    //     answers : { 
    //         value: Object.keys(props.answers).forEach(key => props.answers[key] === undefined && delete props.answers[key]),
    //         key:  Object.keys(props.answers)
    //     }
    // }
    // Object.keys(props.answers).map(e => console.log(e))
    // data.forEach(e => console.log(e))
    // console.log(data)
    // Object.keys(props.answers).forEach(e => console.log(e))
    
    return (
        <VStack>
                <Center p="20">
                       <Heading size="md">{props.question}</Heading>
                    <VStack mt={10} space={6}>
                        {
                            Object.keys(props.answers).map(e => 
                                <Button p={4} rounded="lg" bg="gray.200" px={20}><Heading size="sm">{e}</Heading></Button>
                            )
                        }
                    </VStack>
                </Center> 
            </VStack>
    )
}

export default QuizzQn