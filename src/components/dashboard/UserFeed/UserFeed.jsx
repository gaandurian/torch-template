import React from 'react'
import { Feed } from 'semantic-ui-react'

const image = '/images/avatar/small/laura.jpg'
const date = '3 days ago'
const summary = 'Laura Faucet created a post'
const extraText = "Have you seen what's going on in Israel? Can you believe it."

const UserFeed = () => (
    <Feed>
    <Feed.Event
      icon='pencil'
      date='Today'
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content
        date='Today'
        summary="You posted on your friend Stevie Feliciano's wall."
      />
    </Feed.Event>
  </Feed>
)

export default UserFeed
