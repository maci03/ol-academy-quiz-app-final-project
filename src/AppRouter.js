import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import Quiz from './pages/Quiz.page'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
        </Routes>
    )
}

export default AppRouter