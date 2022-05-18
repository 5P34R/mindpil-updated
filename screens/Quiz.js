import React, { useState, useEffect } from 'react'
import { Box, Button, Center, Heading, Spacer, ScrollView } from 'native-base'
import { fdb } from '../firebase'
import QuizzQn from '../components/QuizzQn'

const QuizScreen = () => {
    const [qA, setQA] = useState([])


    useEffect(() => {
        getData()
    },[])
    
    const getData = async () => {
        await fdb.collection("questions").get()
        .then(result => result.docs)
        .then(docs => docs.map( doc => ({
            question: doc.data().question,
            answers: doc.data().answers
        })))
        .then(obj => setQA(obj))
        console.log("called")
        // data = qA
        qA.map( e => 
            console.log(e.answers)
        )
    }
    
    

    return (
        <Box>
            <Box  bg="indigo.400" p="12" rounded="lg">
                <Center>
                    <Heading color="white">Take Quiz</Heading>
                </Center>
            </Box>
            <Spacer />
            <ScrollView>
            {
                qA.map( e => 
                    <QuizzQn question={e.question} answers={e.answers}/>
                )
            }
            </ScrollView>
            
        </Box>
        
    )
}

export default QuizScreen