import { Fragment } from 'react'
import classes from './Header.module.css'
import mealImg from '../../assets/meals.jpg'

const Header = () => {
  return (
    <div>
      <Fragment>
        <header className={classes.header}>
            <h1>Easy Restaurant</h1>
            <input type="button" value="Click me" />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt=''/>
        </div>
      </Fragment>
    </div>
  )
}

export default Header
