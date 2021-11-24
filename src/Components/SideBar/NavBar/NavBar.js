import classes from './NavBar.module.scss'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item}`}>
                <NavLink
                    to="/profile"
                    className={NavigationLink => NavigationLink.isActive ? classes.active : classes.default}
                >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/messages'
                         className={NavigationLink => NavigationLink.isActive ? classes.active : classes.default}

                >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a href="#P">News</a>
            </div>
            <div className={classes.item}>
                <a href="#P">Music</a>
            </div>
            <div className={classes.item}>
                <a href="#P">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;