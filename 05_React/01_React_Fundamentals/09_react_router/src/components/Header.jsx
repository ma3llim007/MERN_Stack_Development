import { NavLink,Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to={'/'}>React Router</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className={({isActive}) => (isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/'}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/about-us'}>About Us</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/blogs'}>Blogs</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/contact-us'}>Contact Us</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/dashboard'}>Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/login'}>Login</NavLink></li>
                        {/* <li className="nav-item"><NavLink className={({isActive})=>(isActive ? 'nav-link text-primary' : 'nav-link text-white')} to={'/logout'}>Logout</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;