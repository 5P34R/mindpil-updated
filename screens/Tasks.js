import React, {useState} from 'react'

import {Box, Center, Heading, HStack, VStack, Modal, FormControl, Input, Button, Pressable  } from 'native-base'
import {Ionicons} from '@expo/vector-icons'

const Tasks = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Box>
          <Box safeArea bg="indigo.400" p="6" rounded="xl">
            <HStack space="3" justifyContent="space-between">
                <Pressable onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="menu" size={24} color="white" />
                </Pressable>
                <Heading color="white" pr={8}>Welcome Back</Heading>
                <Box></Box>
                </HStack>
            </Box>
            

            <VStack space={10}>
                <Center>
                    <HStack space={2}>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}>A</Button>
                            <Button p={10} bg="gray.200" rounded={10}>A</Button>
                            <Button p={10} bg="gray.200" rounded={10}>A</Button>
                            <Button p={10} bg="gray.200" rounded={10}>A</Button>
                    </HStack>
                </Center>
            </VStack>


            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
        </Box>
    )
}

export default Tasks