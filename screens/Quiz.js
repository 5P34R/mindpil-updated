import React, { useState, useEffect } from 'react'
import { Box, Center, Heading, Spacer, ScrollView } from 'native-base'
import { fdb } from '../firebase'
import QuizzQn from '../components/QuizzQn'
import axios from 'axios'

const QuizScreen = ({ navigation }) => {
    
    const [qA, setQA] = useState([])
    const [i, setI] = useState(0)

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
        // data = qA
        // qA.map( e => 
        //     console.log(e.answers)
        // )
    }
    
    const sendData = async (qn, an) => {
        await axios.post("https://mindpill-fastapi.herokuapp.com/data", {
            question:  qn,
            answer : an
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const answerHandler = (qn, e) => {
        console.log("clicked from parent")
        setI((prev) => (prev+1)%8)
        console.log(i)
        console.log(qn, e)
        sendData(qn, e)
        if(i === 7){
            navigation.navigate("Home")
            setI(0)
        }
    }

    return (
        <Box>
            <Box  bg="indigo.400" p="12" rounded="lg">
                <Center>
                    <Heading color="white">Take Quiz</Heading>
                </Center>
            </Box>

            <Spacer />
           <Center>
            <Heading>Question {i}</Heading>
           </Center>
            <ScrollView>
            {
                     <QuizzQn question={qA[i]?.question} answers={qA[i]?.answers} key={i} answerHandler={answerHandler}/>
            }
            </ScrollView>
            
        </Box>
    )
}

export default QuizScreen