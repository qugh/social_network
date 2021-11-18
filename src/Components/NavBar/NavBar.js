import classes from './NavBar.module.css'

 const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="#P">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="#P">Messages</a>
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