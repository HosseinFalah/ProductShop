import "./NavBar.css";

const NavBar = ({totalItems}) => {
    return (
        <header className="navBar">
            <h1>Shopping-App</h1>
            <span>{totalItems}</span>
        </header>
    )
}

export default NavBar;