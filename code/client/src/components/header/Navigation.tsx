import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'

function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <Box display={{ md: 'none' }}>
      <Button aria-label='Menu' ref={triggerRef} variant={'outline'} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={triggerRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hello</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat quia et provident nemo voluptates
            voluptatibus. Aspernatur obcaecati repudiandae velit ipsum magni quae maxime suscipit placeat dignissimos
            quidem, enim ratione! Harum, blanditiis placeat numquam illum eius quidem magni, adipisci commodi animi
            optio, non laudantium! Velit quasi beatae error, voluptatibus nesciunt consequuntur repellendus a culpa
            illum eveniet. Doloribus mollitia ullam maiores!
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

function Desktop() {
  return <Box display={{ md: 'block', base: 'none' }}>Desktop</Box>
}

function Navigation() {
  return (
    <Box>
      <Mobile />
      <Desktop />
    </Box>
  )
}

export default Navigation
