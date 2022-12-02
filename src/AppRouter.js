import { Routes, Route } from "react-router-dom";
import Finish from "./pages/Finish.page";
import History from './pages/History.page'
import Home from "./pages/Home.page";
import Quiz from './pages/Quiz.page'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="/history" element={<History />} />
        </Routes>
    )
}

export default AppRouter