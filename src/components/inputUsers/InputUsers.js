
import * as Yup from 'yup';
import './inputUsers.scss'
//import { useState } from 'react';
import { useFormik } from 'formik';
//import * as Yup from 'yup';



// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// });


const InputUsers = () => {
    // const [valueName, setValueName] = useState('')
    // const [valueEmail, setValueEmail] = useState('')


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 3));
        },
    });

    return (

        <div>
            <form onSubmit={formik.handleSubmit} className='input-users' action="">
                <input className='input-users_input'
                    type="text"
                    name="name"
                    placeholder='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <input className='input-users_input'
                    type="email"
                    name="email"
                    placeholder='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <button type='submit' className='input-users_button'>отправить</button>
            </form>
        </div>
    );
}

export default InputUsers;
