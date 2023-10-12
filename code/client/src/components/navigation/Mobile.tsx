import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Link from '@ui/Link'
import { useRef } from 'react'
import { links } from './links'
import { authStore } from '@stores/authStore'
import Logo from './Logo'

function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const user = authStore((state) => state.currentUser)

  return (
    <Flex align={'center'} justify={'space-between'} w={'full'}>
      <Logo />
      <Box as='nav' px={4}>
        <Button aria-label='Menu' ref={triggerRef} variant={'ghost'} onClick={onOpen}>
          <HamburgerIcon boxSize={8} />
        </Button>
        <Drawer isOpen={isOpen} placement='right' size={'md'} onClose={onClose} finalFocusRef={triggerRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={Flex} direction={'row'} gap={3} align={'center'}>
              {user !== null ? (
                <>
                  <Avatar name={user.name} src={user.avatar} />
                  <Flex direction={'column'} justify={'space-around'} h={'full'}>
                    <Text fontSize={'sm'}>{user.username}</Text>
                    <Text fontSize={'xs'} opacity={'0.7'}>
                      {user.name}
                    </Text>
                  </Flex>
                </>
              ) : (
                <div>Log in</div>
              )}
            </DrawerHeader>
            <DrawerBody>
              <Stack divider={<StackDivider />}>
                {links.map((link) => (
                  <Box key={link.path}>
                    <Link to={link.path}>{link.title}</Link>
                  </Box>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  )
}

export default Mobile
