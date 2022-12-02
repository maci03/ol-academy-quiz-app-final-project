import { Link } from 'react-router-dom'

const Finish = () => {
    return (
        <div>
            <h1>Finish Page</h1>
            <div>Result: 2/3</div>
            <Link to="/">Try Again</Link>
            <Link to="/history">See Attempts History</Link>
        </div>
    )
}

export default Finish;