import React from 'react'
import MenuItem from './MenuItem'
import Profile from './Profile'

import search from '../assets/icons/search.png'
import home from '../assets/icons/home.png'
import shows from '../assets/icons/shows.png'
import movies from '../assets/icons/movies.png'
import genres from '../assets/icons/genres.png'
import watchLater from '../assets/icons/watch-later.png'

import '../assets/styles/Menu.css'

// adding these data as constants because we are not updating right now
const items = [
  {
    id: 1,
    title: 'Search',
    logo: search,
    selected: false,
  },
  {
    id: 2,
    title: 'Home',
    logo: home,
    selected: true,
  },
  {
    id: 3,
    title: 'Shows',
    logo: shows,
    selected: false,
  },
  {
    id: 4,
    title: 'Movies',
    logo: movies,
    selected: false,
  },
  {
    id: 5,
    title: 'Genres',
    logo: genres,
    selected: false,
  },
  {
    id: 6,
    title: 'Watch Later',
    logo: watchLater,
    selected: false,
  },
]

const secondaryItems = [
  {
    id: 6,
    title: 'LANGUAGE',
    logo: home,
    selected: false,
  },
  {
    id: 7,
    title: 'GET HELP',
    logo: home,
    selected: false,
  },
  {
    id: 8,
    title: 'EXIT',
    logo: shows,
    selected: false,
  },
]

const user = {
  name: 'Daniel',
  avatar: 'https://statcdn.fandango.com/MPX/image/NBCU_Fandango/370/727/thumb_F63C1BD7-116D-425A-8341-CBF1A84F2575.jpg'
}

const Menu = () => {
  return (
    <nav className='menu-container'>
      <div className='initial-items'>
        <div className='profile-container'>
          <Profile user={user} />
        </div>
        {items.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            logo={item.logo}
            selected={item.selected}
          />
        ))}
      </div>
      <div className='secondary-items'>
        {secondaryItems.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            selected={item.selected}
          />
        ))}
      </div>
    </nav>
  )
}

export default Menu