import {Link} from 'react-router-dom'

import {useState} from 'react'

import './index.css'

const navList = [
  {id: 'HOME', path: '/', name: 'Home'},
  {id: 'ABOUT', path: '/about', name: 'About'},
  {id: 'VACCINATION', path: '/vaccination', name: 'Vaccination'},
]

export default function Header() {
  const [active, setActive] = useState(navList[0].id)

  const isDark = true
  return (
    <div className={`header${isDark ? '' : ' header--dark'}`}>
      <Link to="/" className="link">
        <h1 className={`header__title ${isDark ? '' : 'header__title--dark'}`}>
          COVID19<span className="header__title--highlight">INDIA</span>
        </h1>
      </Link>
      <div className="nav">
        {navList.map(eachItem => (
          <Link to={eachItem.path} key={eachItem.id}>
            <button
              key={eachItem.id}
              type="button"
              className={`nav__element ${
                active === eachItem.id ? 'nav__element--active' : ''
              }`}
              onClick={() => {
                setActive(eachItem.id)
              }}
            >
              {eachItem.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
