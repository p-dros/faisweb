import { FieldsResponse } from '@/types/pocketbaseTypes'
import { Box, Tag } from '@chakra-ui/react'

type Props = {
  fields: FieldsResponse[]
}

function CoursesGallertCardFieldsBadges({ fields }: Props) {
  if (fields.length <= 3) {
    return (
      <Box mt={2}>
        {fields.map((field) => (
          <Tag key={field.id}>{field.shortcut}</Tag>
        ))}
      </Box>
    )
  }

  return <Box>{fields.length}</Box>
}

export default CoursesGallertCardFieldsBadges
