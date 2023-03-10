import PropTypes from 'prop-types'; 
import Button from './Button';
import { Link } from 'react-router-dom';

const Header=({title})=> {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <h4>All the lore, in one place. Happy hunting!</h4>
            <div className='link-container'>
                <Link to='/creatures'>Creatures</Link>
                <Link to='/add-creature'>Add Creatures</Link>
            </div>
            
        </header>
    )
}

Header.propTypes={
    title: PropTypes.string,
}

export default Header