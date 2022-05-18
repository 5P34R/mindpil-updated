import React, {useState} from "react";
import { Box, HStack, Pressable, Heading, Select, CheckIcon, Spacer, VStack, FormControl, Input, Button } from 'native-base'
import {Ionicons} from '@expo/vector-icons'

import { fdb } from '../firebase'

const PersonalDetails = ({ navigation, route }) => {
    // const [user, setUser] = route.params.userData

    const [uid, setUid] = route.params?.userData.uid
    const [service, setService] = useState("");
    const [fname, setFname] = useState("")
    const [Lname, setLname] = useState("")

    const submitHandler = () => {
        console.log(fname)
        console.log(Lname)
        console.log(service)
        sendData()
        // console.log("clicked")
    }

    const sendData = () => {
        fdb.collection('userdetails').doc(uid).set({
            first_name: fname,
            last_name: Lname,
            age_catagory: service
        }).then(res => alert("Added"))
        .catch(err => console.log(err))
        navigation.navigate("Quiz")
    }

    console.log(route.params.userData.uid)
    return (
        <Box >
            <Box safeArea bg="indigo.400" p="6" rounded="xl">
            <HStack space="3" justifyContent="space-between">
                <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={24} color="white" />
                </Pressable>
                <Heading color="white" pr={8}>Welcome {route.params?.userData.email}</Heading>
            <Box></Box>
            </HStack>
            </Box>

            <Spacer my={20} />
            <VStack space={3} mt="5" mx="4">

              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input value={fname} onChangeText={text => setFname(text)}/>
              </FormControl>

              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input value={Lname} onChangeText={(text) => setLname(text)} type="text" />

              </FormControl>

            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Age Catagory" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Kids (upto 11)" value="kid" />
            <Select.Item label="Teen (13 - 17)" value="teen" />
            <Select.Item label="Adult (18 +)" value="adult" />
            <Select.Item label="Twenties (20-30)" value="twenties" />
            <Select.Item label="Thirties (30 - 40)" value="thirties" />
            <Select.Item label="Middle age (40 +)" value="middleage" />
            <Select.Item label="Retired (60 - 65)" value="retired" />
            <Select.Item label="Old Age (70 +)" value="oldage" />
            </Select>

                <Button mt="2" colorScheme="indigo" onPress={submitHandler}>
                  Proceed
                </Button>
            </VStack>
            
        </Box>
        
    )
}

export default PersonalDetails