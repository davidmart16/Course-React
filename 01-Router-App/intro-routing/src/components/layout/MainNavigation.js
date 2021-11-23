import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
    <header>
        <div></div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meet up</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favourites</Link>
                </li>
            </ul>
        </nav>
    </header>)
}

export default MainNavigation