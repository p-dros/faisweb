import { Box, Grid, Heading } from '@chakra-ui/react'

function CourseInfo() {
  return (
    <Grid templateColumns={'2fr 1fr'}>
      <Box>
        <Heading as={'h2'} size={'lg'} fontWeight={'medium'}>
          About the course
        </Heading>
      </Box>
      <Box></Box>
    </Grid>
  )
}

export default CourseInfo
