import { useEffect, useState } from "react"
import styles from '../../styles/modules/Navbar.module.css';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaServicestack } from "react-icons/fa";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dark Mode detection
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
    }, []);

    // Toggle mobile navigation menu
    const toggleNavbar = () => setIsOpen(!isOpen);

    // Navigation items configuration
    const navItems = [
        { path: '/', name: 'Home', icon: <FaHome className="mr-1" aria-hidden="true" /> },
        { path: '/about', name: 'About', icon: <FaInfoCircle className="mr-1" aria-hidden="true" /> },
        { path: '/services', name: 'Services', icon: <FaServicestack className="mr-1" aria-hidden="true" /> },
        { path: '/portfolio', name: 'Portfolio', icon: <FaBriefcase className="mr-1" aria-hidden="true" /> },
        { path: '/contact', name: 'Contact', icon: <FaEnvelope className="mr-1" aria-hidden="true" /> },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? 'py-3' : 'py-4'} transition-all `} aria-label="Main Navigation">
            <div className="container-fluid">
                <div className={` ${styles.navContainer} d-flex justify-content-between align-items-center `}>
                    {/* Branding / Logo */}
                    <Link
                        to="/"
                        className={` ${styles.logo} text-decoration-none `}
                        arial-label="Home"
                    >
                        Portfolio
                    </Link>

                    {/* Desktop navigation */}
                    <div className={` ${styles.Navlinks} d-none d-lg-flex mb-0 `}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${styles.Navlink} flex items-center`}
                                arial-label={item.name}
                            >
                                {item.icon}
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="d-flex align-items-center">
                        {/* Mobile Menu Toggle */}
                        <button
                            className={`${styles.toggle} d-lg-none btn p-2`}
                            onClick={toggleNavbar}
                            aria-label="Toogle navigation"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>

                        {/* Theme Toggle */}
                        <button
                            className={`${styles.themeToggle} btn p-2 ms-3`}
                            onClick={() => setIsDark(!isDark)}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`${styles.mobileNav} ${isOpen ? 'show' : ''} d-lg-none`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`${styles.NavLink} text-decoration-none d-block py-2`}
                            onClick={() => setIsOpen(false)}
                            aria-label={item.name}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;