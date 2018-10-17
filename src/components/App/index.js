import { mapIndexed } from 'ramda-adjunct'
import { sort } from 'ramda'
import React from 'react'

/*
  A quick google search gave me what I needed to include the welcome 
  message. 

  For the list of users, the Ramda-adjunct documentation proved useful. (But only 
  after a search how to get state from redux, before I realised mapIndexed was 
  just sitting there waiting for me).

  Implementing the sorting took longer than it could have, I got stuck on a syntax problem.

  For adding the sorting toggle I half went off the redux documentation, half copied the
  user registered action. I think I got the setup done but got stuck figuring out how
  actually put it all together.
*/
export default function App({
  handleOnSubmit,
  latestUser,
  users,
  handleSortingToggle
}) {
  /* create the sorted user list here to make it reusable and keep things clean */
  const sortedUsers = sort((user1, user2) => user1.localeCompare(user2), users)

  /* create the mapping from users to list elements here to keep the jsx clean */
  const userList = mapIndexed(
    (user, index, sortedUsers) => (
      <li>
        {index + 1}: {user}
      </li>
    ),
    sortedUsers
  )

  return (
    <div className="App">
      <h1>Welcome to the Not-a-Test skill demo site!</h1>
      <p>The last person to register was {latestUser}</p>
      <p> Add your name below to join them:</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <button onClick={handleSortingToggle}>Toggle alphabetical sorting</button>
      <ul>{userList}</ul>
    </div>
  )
}
