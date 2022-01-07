import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={isOpen ?
            'grid grid-rows-4 text-center items-center bg-orange-400' : 'hidden'}
            onClick={toggle}>
                <Link className='p-4' to='Eggcellent/'>Home</Link>
                <Link className='p-4' to='Eggcellent/menu'>Menu</Link>
                <Link className='p-4' to='Eggcellent/about'>About</Link>
                <Link className='p-4' to='Eggcellent/contact'>Contact</Link>
        </div>
    )
}

export default Dropdown
