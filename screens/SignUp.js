import React,{ useState } from 'react';
import { NativeBaseProvider, Text, Center, Box, Heading, FormControl, VStack, Input, Link, Button, HStack, Spacer, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { auth } from '../firebase'; 

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password1, setPassword1] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const submitHandle = ()=> {
        if(password === password1){
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCreds => {
              const user = userCreds.user;
              console.log(user.email)
            })
            .catch(err => alert(err.message))
        }else{
            alert("Password doesn't match.")
        }

    }

    return(
        <NativeBaseProvider>
          <Center w="100%" safeArea>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={24} color="black" />
                </Pressable>
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
              Welcome 
            </Heading>
            <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">
              Sign up to continue!
            </Heading>

            <Spacer my={20} />
            <VStack space={3} mt="5">

              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input value={email} onChangeText={text => setEmail(text)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input value={password} onChangeText={(text) => setPassword(text)} type={show ? "text" : "password"} InputRightElement={<Button bg='warmGray.200' size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
              {show ? <Feather name="eye-off" size={24} color="black" /> : <AntDesign name="eyeo" size={24} color="black" />}
            </Button>} placeholder="Password"  />
            </FormControl>

              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input value={password1} onChangeText={(text) => setPassword1(text)} type={show ? "text" : "password"} InputRightElement={<Button bg='warmGray.200' size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
              {show ? <Feather name="eye-off" size={24} color="black" /> : <AntDesign name="eyeo" size={24} color="black" />}
            </Button>} placeholder="Password"  />
            
              </FormControl>

              <Button mt="2" colorScheme="indigo" onPress={submitHandle}>
                Sign up
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                  Already have an account.{" "}
                </Text>
                <Link _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }}
              onPress={() => navigation.navigate('Login')}>
                  Sign In
                </Link>
              </HStack>
              <HStack>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    ) 
  };

export default SignUp;