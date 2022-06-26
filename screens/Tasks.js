import React, {useState} from 'react'

import {Text, Box, Center, Heading, HStack, VStack, Modal, FormControl, Input, Button, Pressable  } from 'native-base'
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
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 1</Text></Button>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 2</Text></Button>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 3</Text></Button>
                            
                    </HStack>
                    <HStack py={4} space={2}>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 4</Text></Button>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 5</Text></Button>
                            <Button p={10} bg="gray.200" rounded={10}  onPress={() => setShowModal(true)}><Text>Task 6</Text></Button>

                    </HStack>
                </Center>
            </VStack>


            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Tasks</Modal.Header>
          <Modal.Body>
          Put thoughts on trial: Choose a thought that has contributed to your anxiety. Gather evidence in support of your thought (verifiable facts only), and against your thought. Compare the evidence and determine whether your thought is accurate or not.
            
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
                Done
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
        </Box>
    )
}

export default Tasks