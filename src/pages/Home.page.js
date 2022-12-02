import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/quiz">Start a quiz</Link>
            <div>Last Result: 2/3</div>
            <Link to="/history">See Attempts History</Link>
        </div>
    )
}

export default Home;