import icon from '../../assets/arrow-narrow-right.svg';
import Button from '../Button/Button';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Form = () => {

    const [error, setErrors] = useState({})

    const [formdata, setformdata] = useState({
        first_name : '',
        last_name : '',
        username : '',
        email : '',
        password : '',
        confirm_password : '',
    })

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformdata((prev) => ({ ...prev, [name]: value}))
    }
    
    const URL = 'http://127.0.0.1:8000/User/register/'

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formdata.password != formdata.confirm_password){
            toast.error('Password do not matched.');
            return;
        }

        try {
            const response = await axios.post(URL, formdata)
            toast.success('User register successfully.')

            setformdata ({
                first_name : '',
                last_name : '',
                username : '',
                email : '',
                password : '',
                confirm_password : ''
            })

            // console.log(response.data)

        } catch (error) {
            if (error.message || error.response.status === 400){
                const backendErrors = error.response.data;
                setErrors(backendErrors);
            }
            else {
            toast.error(error.response?.data?.message || 'Registeration failed');
        }
        }
    }


    return (
        <form onSubmit={handleSubmit} className='w-[692px] h-[706px] mx-auto p-6'>
            <div className="mb-5">
                <h2 className="text-center text-2xl font-bold text-gray-900">
                    Create Your Account
                </h2>
            </div>

            {/* Full Name Fields */}
            <div className="w-full mb-4">
                <label className="block text-gray-900 font-semibold mb-2">
                    Full Name
                </label>
                <div className="flex gap-2">
                    <input
                        className="w-1/2 border border-gray-300 p-2 rounded-md text-gray-900"
                        type="text"
                        placeholder="First Name"
                        name='first_name'
                        value={formdata.first_name}
                        onChange={handleChange}
                    />
                    <input
                        className="w-1/2 border border-gray-300 p-2 rounded-md text-gray-900"
                        type="text"
                        placeholder="Last Name"
                        name='last_name'
                        value={formdata.last_name}
                        onChange={handleChange}
                    />
                    {error.last_name && <span className='text-red-500'>{error.last_name}</span>}
                </div>
            </div>

            {/* Username Field */}
            <div className="w-full mb-4">
                <label className="block text-gray-900 font-semibold mb-2">
                    Username
                </label>
                <input
                    className="w-full border border-gray-300 p-2 rounded-md text-gray-900"
                    type="text"
                    placeholder="Username"
                    name='username'
                    value={formdata.username}
                    onChange={handleChange}
                />
                {error.username && <span className='text-red-500'>{error.username}</span>}
            </div>

            {/* Email Field */}
            <div className="w-full mb-4">
                <label className="block text-gray-900 font-semibold mb-2">
                    Email
                </label>
                <input
                    className="w-full border border-gray-300 p-2 rounded-md text-gray-900"
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={formdata.email}
                    onChange={handleChange}
                />
                {error.email && <span className='text-red-500'>{error.email}</span>}
            </div>

            {/* Password and Confirm Password Fields */}
            <div className="flex gap-2 mb-4">
                <div className="w-1/2">
                    <label className="block text-gray-900 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-900"
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={formdata.password}
                        onChange={handleChange}
                    />
                    {error.password && <span className='text-red-500'>{error.password}</span>}
                </div>
                <div className="w-1/2">
                    <label className="block text-gray-900 font-semibold mb-2">
                        Confirm Password
                    </label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-900"
                        type="password"
                        placeholder="Confirm Password"
                        name='confirm_password'
                        value={formdata.confirm_password}
                        onChange={handleChange}
                    />
                    {error.confirm_password && <span className='text-red-500'>{error.confirm_password}</span>}
                </div>
            </div>

            {/* Create Account Button */}
            <div className="mb-4">
                <Button text="Create Account" icon={icon} btnClass="bg-black text-white py-2 rounded-md" />
            </div>

            {/* Divider */}
            <div className="flex items-center mb-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-4 text-gray-600">Signup with</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Signup Options */}
            <div className="flex justify-center gap-4">
                {[
                    { icon: <FaFacebook className="text-gray-600 text-xl" />, label: 'Facebook' },
                    { icon: <FaGoogle className="text-gray-600 text-xl" />, label: 'Google' },
                    { icon: <FaGithub className="text-gray-600 text-xl" />, label: 'Github' },
                ].map((provider, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md w-[220px] justify-center"
                    >
                        {provider.icon}
                        <span className="text-gray-600">{provider.label}</span>
                    </div>
                ))}
            </div>
        </form>
    );
};

export default Form;
