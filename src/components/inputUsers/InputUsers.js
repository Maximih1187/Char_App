

import './inputUsers.scss'
import { useState } from 'react';

const InputUsers = () => {
    const [valueName, setValueName] = useState("")
    const [valueEmail, setValueEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const objData = {
            name: valueName,
            email: valueEmail
        }
        console.log(objData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='input-users' action="">
                <input className='input-users_input'
                    type="text"
                    name="name"
                    placeholder='name'
                    value={valueName}
                    onChange={(e) => setValueName(e.target.value)}
                />
                <input className='input-users_input'
                    type="email"
                    name="email"
                    placeholder='email'
                    value={valueEmail}
                    onChange={(e) => setValueEmail(e.target.value)}
                />
                <button type='submit' className='input-users_button'>отправить</button>
            </form>


        </div>
    );
}

export default InputUsers;
