import { Flex, Typography } from 'antd'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  text: string
}

const ContactItem: React.FC<Props> = ({ icon, text, ...props }) => {
  return (
    <Flex gap={10} className={props.className}>
      {icon}
      <Typography.Text className='text-white'>{text}</Typography.Text>
    </Flex>
  )
}

export default ContactItem
