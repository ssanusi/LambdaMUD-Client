import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MessageHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='comment' circular />
      <Header.Content>Adventure</Header.Content>
    </Header>
  </div>
)

export default MessageHeader
