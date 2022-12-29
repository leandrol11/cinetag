import About from "pages/About"
import BasePage from "pages/BasePage"
import Favoritos from "pages/Favoritos"
import Home from "pages/Home"
import NotFound from "pages/NotFound"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path="sobre" element={<About />} />
                    <Route path=":id" element={<Player />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}