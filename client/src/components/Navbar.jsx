import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {

    const logout = () => {
        // Add your logout logic here
        console.log("User logged out");
    };
    // Fetch authentication status
    const { data: authData } = useQuery({
        querykey: ['authStatus'],
        // queryFn: checkAuthStatus,
        staleTime: 5 * 60 * 1000,
    });

    // Fetch notification
    const {
        data: notifications,
        isLoadong: notificationsLoading,
        error: notificationsError,
        // refetch: refetchnotifications
    } = useQuery({
        querykey: ['notifications'],
        // queryFn: fetchNotifications,
        refetchInterval: 60 * 1000, // Auto refresh every minute
    });
    

    // Update document tittle qith notification count
    useEffect(() => {
        if (notifications?.length > 0) {
            document.title = `(${notifications.length}) Portfolio App`;
        } else {
            document.title = 'Portfolio App';
        }
    }, [notifications]);

    return (
        <nav className="navbar bg-base-100 shadow-lg px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-x1">
                My Portfolio
                </Link>
            </div>
            <div className="flex-none gap-4">
                {/* main navigation Links */}
                <div className="hidden md:flex">
                    <Link to="/resume" className="btn btn-ghost">Resume</Link>
                    <Link to="/blog" className="btn btn-ghost">Blog</Link>
                    <Link to="/projects" className="btn btn-ghost">Projects</Link>
                </div>

                {/* Notifications*/}
                <div className="dropdown dropdown-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17hh51-1.405-1.405A2.032 2.032 0 0118 14.158V11A6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11V3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v=1m6 0H9" />
                            </svg>
                            {notifications?.length > 0 && (
                                <span className="badge badge-xs badge-primary indicator-item">
                                    {notifications.length}
                                </span>
                            )}
                        </div>
                    </button>

                    {/* Notifications Dropdown */}
                    <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
                        {notificationsLoading ? (
                            <div className="text-center p-4">
                                <span className="loading loading-spinner"></span>
                            </div>
                        ) : notificationsError ? (
                            <div className="text-error p-2">Error loading notifications</div>
                        ) : notifications ?.length > 0 ? (
                            notifications.map(notification => (
                                <div key={notification.id} className="p-2 hover:bg-base-200 rounded">
                                    {notification.message}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No new notifications</div>
                        )}
                    </div>
                </div>

                {/* Auth Section */}
                <div className="dropdown dropdown-end">
                    {authData?.isAuthenticated ? (
                        <>
                        <button className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={authData.user.avatar} alt="Profiel" />
                            </div>
                        </button>

                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <button onClick={() => logout()}>Logout</button></li>
                        </ul>
                        </>
                    ) : (
                        <Link to="/login" className="btn btn-primary">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;