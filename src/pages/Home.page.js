import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/quiz">Start a quiz</Link>
        </div>
    )
}

export default Home;