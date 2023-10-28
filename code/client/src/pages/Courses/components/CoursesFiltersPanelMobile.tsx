import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FaFilter } from 'react-icons/fa6'

function CoursesFiltersPanelMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        as={Flex}
        gap={2}
        align={'center'}
        ref={buttonRef}
        onClick={onOpen}
        variant={'outline'}>
        <Icon as={FaFilter} />
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>Hello</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CoursesFiltersPanelMobile
