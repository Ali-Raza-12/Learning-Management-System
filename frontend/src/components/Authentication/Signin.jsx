import image from '../../assets/Signup-page/Frame 427319049.svg';
import Button from '../Button/Button';
import icon from '../../assets/chevron-right.svg';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signin = () => {
    const [error, setErrors] = useState({});
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        const URL = 'http://127.0.0.1:8000/User/login/';

        try {
            const response = await axios.post(URL, formData);
            const {access, refresh} = response.data;
            
            toast.success('Login successfully.');
            setFormData({ email: '', password: '' });
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const backendErrors = error.response.data;
                setErrors(backendErrors);
            } else {
                toast.error(error.response?.data?.message || 'Login failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full h-auto flex justify-between'>
            <div className='px-4'>
                <div className='w-[692px] h-[706px] pl-6'>
                    <div className="m-5">
                        <h2 className="text-center text-[24px] font-bold text-gray-900">Sign in to your account</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="w-full my-4 flex flex-col gap-1">
                            <label className="text-gray-900 font-semibold">Email</label>
                            <div>
                                <input
                                    className="w-full border border-gray-300 p-[10px] rounded-[8px] text-gray-900"
                                    type="email"
                                    placeholder='Email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-1 my-4">
                            <label className="text-gray-900 font-semibold">Password</label>
                            <input
                                className="w-full border border-gray-300 p-[10px] rounded-[8px] text-gray-900"
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {error.password && <span className="text-red-500 text-sm">{error.password}</span>}
                        </div>

                        <div className='my-2'>
                            <Button
                                text={loading ? 'Loading...' : 'Login'}
                                icon={icon}
                                btnClass={`bg-black text-white ${loading ? 'cursor-wait' : ''}`}
                                onClick={handleSubmit}
                                disabled={loading}
                            />
                        </div>
                    </form>

                    <div className="flex items-center my-8">
                        <hr className='flex-grow border-t border-gray-300' />
                        <span className="mx-4 text-gray-600">SignIn with</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className='flex items-center gap-3 mt-8'>
                        <div className='border border-gray-500 px-10 w-[220px] h-[50px] items-center justify-center flex gap-2 rounded-md'>
                            <FaFacebook style={{ fontSize: '25px', color: 'gray' }} />
                            <p className='text-gray-600'>Facebook</p>
                        </div>

                        <div className='border border-gray-500 px-10 w-[220px] h-[50px] items-center justify-center flex gap-2 rounded-md'>
                            <FaGoogle style={{ fontSize: '25px', color: 'gray' }} />
                            <p className='text-gray-600'>Google</p>
                        </div>

                        <div className='border border-gray-500 px-10 w-[220px] h-[50px] items-center justify-center flex gap-2 rounded-md'>
                            <FaGithub style={{ fontSize: '25px', color: 'gray' }} />
                            <p className='text-gray-600'>Github</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[628px] h-[759px]'>
                <img src={image} alt="signup-image" />
            </div>
        </div>
    );
};

export default Signin;
