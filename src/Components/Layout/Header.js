import { Fragment } from 'react';
import mealImage from '../../Assets/meals.jpeg'
import classes from '../Layout/Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () =>{
    return(
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt='A table full of delicious food!'/>
        </div>
        </Fragment>
    )
}

export default Header;