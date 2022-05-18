import React from 'react'
import { Box, Heading, Center, Avatar, Button, Divider, Stack, FormControl, Input, Icon  } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const settingScreen = () => {
    return (
        <Box>
            <Box  bg="indigo.400" p="12" rounded="lg">
                <Center>
                    <Heading color="white">Settings</Heading>
                </Center>
                
            </Box>
            <Center>

                <Box py="4" rounded="md" maxWidth="100%">
                        
                    <Avatar size={24} source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}></Avatar>
                </Box>
                <Box mt="3">
                <Button
                    leftIcon={<MaterialCommunityIcons name="image-edit-outline" size={24} color="white" />} 
                    bg="indigo.500" size="md">Change Avatar</Button>
                </Box>
            </Center>
            <Divider thickness="2" mx="2" />

            <Box mt="4" mx="10">
                <Stack space={5}>
                    <Stack>
                        <FormControl edit mb="5">
                            <FormControl.Label _disabled={{
                                _text: {
                                color: "gray.400",
                                fontWeight: "bold"
                                }
                            }}>
                                Username
                                </FormControl.Label>
                                <Input value="0xSpear" size="md" variant="underline"  InputRightElement={<Icon as={<Feather name="edit" size={24} color="black" />} size={5} ml="2" color="muted.400" />}/>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <FormControl isDisabled mb="5">
                            <FormControl.Label _disabled={{
                                _text: {
                                color: "gray.400",
                                fontWeight: "bold"
                                }
                            }}>
                                Email
                                </FormControl.Label>
                                <Input value="vk2345732@gmail.com" size="md" variant="underline"  InputRightElement={<Icon as={<Feather name="edit" size={24} color="black" />} size={5} ml="2" color="muted.400" />}/>
                        </FormControl>
                    </Stack>      
                    <Stack>
                        <FormControl isDisabled mb="5">
                            <FormControl.Label _disabled={{
                                _text: {
                                color: "gray.400",
                                fontWeight: "bold"
                                }
                            }}>
                                Age
                                </FormControl.Label>
                                <Input value="18-21" size="md" variant="underline"  InputRightElement={<Icon as={<Feather name="edit" size={24} color="black" />} size={5} ml="2" color="muted.400" />}/>
                        </FormControl>
                    </Stack>  
                    <Stack>
                        <FormControl isDisabled mb="5">
                            <FormControl.Label _disabled={{
                                _text: {
                                color: "gray.400",
                                fontWeight: "bold"
                                }
                            }}>
                                Catagory
                                </FormControl.Label>
                                <Input value="Social Isolation" size="md" variant="underline"  InputRightElement={<Icon as={<Feather name="edit" size={24} color="black" />} size={5} ml="2" color="muted.400" />}/>
                        </FormControl>
                    </Stack> 
                </Stack>
                </Box>

                 <Center>
                    <Button bg="indigo.500"  rounded="lg" py="3" px="6">Save Changes</Button>
                </Center>

        </Box>
        
    )
}

export default settingScreen