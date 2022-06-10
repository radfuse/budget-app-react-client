import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />

            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
};

export default Layout;