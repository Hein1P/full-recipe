import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router';

function Search() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleOnChange = (e) => setName(e.target.value)
    const handlePress = (e) => {
        console.log(e)
        if (e.key == 'Enter') {
            e.preventDefault();
            navigate(`/search/${name}`)
        }
    }
    return (
        <form style={
            {
                margin: '2rem 0rem 1rem 0rem',
                position: 'relative',
                width: '100 % ',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            }}>
            <div style={{
                backgroundColor: '#2f2f2f', borderRadius: '0.7rem', width: '40rem', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <FaSearch style={{ fontSize: '1.3rem', margin: '0rem 1rem', backgroundColor: '#2f2f2f', }} />
                <input type={'text'} value={name} placeholder={'Cookies'} onKeyPress={handlePress} onChange={handleOnChange}
                    style={
                        {
                            height: '3rem',
                            width: '35rem',
                            backgroundColor: '#2f2f2f',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1.5rem',
                            color: '#fff'
                        }} />
            </div>

        </form>
    )
}


export default Search