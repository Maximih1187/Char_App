
import { useDispatch } from 'react-redux';
import './inputUsers.scss'
import { useReducer } from 'react';
import { useState } from 'react';

const InputUsers = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState({ name: '', email: "" })

    console.log({ value });
    return (
        <div>
            <form className='input-users' action="">
                <input className='input-users_input'
                    type="text"
                    name="name"
                    placeholder='name'
                    value={value.name}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input className='input-users_input'
                    type="email"
                    name="email"
                    placeholder='email'
                    value={value.email}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onSubmit={(e) => e.defaultPrevented} className='input-users_button'>отправить</button>
            </form>

        </div>
    );
}

export default InputUsers;
