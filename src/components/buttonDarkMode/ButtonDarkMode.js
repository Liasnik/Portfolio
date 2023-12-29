import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import sun from './sun.svg'
import moon from './moon.svg'
import './buttonDarkMode.css'

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  const themIcon =  darkMode === 'dark' ? sun : moon

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light'
        setDarkMode(newColorScheme)
      })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button
      className="dark-mode-btn"
      onClick={toggleDarkMode}
    >
      <img src={themIcon} alt="themIcon" className="dark-mode-btn__icon" />
    </button>
  )
}

export default ButtonDarkMode
