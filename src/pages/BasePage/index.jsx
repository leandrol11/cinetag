import Footer from "components/Footer";
import NavBar from "components/Navbar";
import FavoriteProvider from "context/Favorite";
import { Outlet } from "react-router-dom";

export default function BasePage() {
    return (
        <main>
            <NavBar />
            <FavoriteProvider>
                <Outlet />
            </FavoriteProvider>
            <Footer> Made by Leandro Maciel</Footer>
        </main>
    )
}