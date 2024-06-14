// Import React library and necessary hooks
import React from 'react';
import { useForm } from 'react-hook-form';
// Import icons for Google and GitHub login
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { IoMdLogIn } from "react-icons/io";
import login from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Adjust the path according to your project structure
import toast from 'react-hot-toast';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn, googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await signIn(data.email, data.password);
            toast.success('Login successful!');
            reset(); // Clear form fields after successful login
            navigate('/dashboard/profile')
        } catch (error) {
            toast.error(`Login failed: ${error.message}`);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleSignIn();
            toast.success('Google login successful!');
            navigate('/dashboard/profile')
        } catch (error) {
            toast.error(`Google login failed: ${error.message}`);
        }
    };

    const handleGithubLogin = async () => {
        try {
            await githubSignIn();
            toast.success('GitHub login successful!');
            navigate('/dashboard/profile')
        } catch (error) {
            toast.error(`GitHub login failed: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center sm:px-6 lg:px-8">
           
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-40 w-auto" src={login} alt="Logo" />
            </div>

            <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-md border-2 border-primaryColor rounded-lg">
                <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="mt-1">
                                <input
                                    {...register('email', { required: true })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-600">Email is required</p>}
                            </div>
                        </div>

                        <div>
                            <div className="mt-1">
                                <input
                                    {...register('password', { required: true })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                    placeholder="Enter your password"
                                />
                                {errors.password && <p className="mt-2 text-sm text-red-600">Password is required</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/registration" className="font-medium underline">
                                    Do not have any Account? Please Register
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="secondaryButton mx-auto">
                                <IoMdLogIn />
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-2">
                            <button onClick={handleGoogleLogin} className="secondaryButton mx-auto">
                                <FaGoogle className="mr-2" /> Google
                            </button>
                            <button onClick={handleGithubLogin} className="secondaryButton mx-auto">
                                <FaGithub className="mr-2" /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
