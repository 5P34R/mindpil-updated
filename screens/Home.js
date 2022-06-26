import React from "react";
import {Text, Box,Heading, HStack, Avatar, Pressable, VStack, Progress, Center, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';


const Home = ({ navigation }) => {
    return (
        <>
        <Box safeArea bg="indigo.400" p="6" rounded="xl">
            <HStack space="3" justifyContent="space-between">
                <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={24} color="white" />
                </Pressable>
                <Heading color="white" pr={8}>Welcome Back</Heading>
                <Avatar
                    source={{
                        uri:"https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg"
                    }}
                >
                    SS
                </Avatar>
            </HStack>
        </Box>
                <VStack mt={18} >
                    <Box mt={8} p={8} bg="gray.200" shadow={8} rounded="md">
                        <Text>We recognise Social Isolation</Text>
                    </Box>
                   <Box mt={8} p={8} bg="gray.200" shadow={8} rounded="md">
                    <Heading my={2}>Your Progress</Heading>
                    <Progress value={45}  />
                   </Box>
                   
                   <Center mt={10}>
                    <Button onPress={() => navigation.navigate("Tasks")}>Go To Tasks</Button>
                   </Center>
                </VStack>
        </>
    )
}

export default Home