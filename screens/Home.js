import React from "react";
import { Box,Heading, HStack, Avatar, Pressable, VStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons';


const Home = ({ navigation }) => {
    return (
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
            
                <VStack>
                    
                </VStack>
            
        </Box>
        
    )
}

export default Home