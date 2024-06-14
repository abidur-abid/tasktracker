import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import registration from '../assets/registration.png';
import useAuth from '../hooks/useAuth';  // Adjust the path according to your project structure
import toast from 'react-hot-toast';

const RegistrationFrom = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, googleSignIn, githubSignIn, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const uploadImageToImgbb = async (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                toast.success('Image uploaded successfully!');
                return result.data.url;
            } else {
                toast.error('Image upload failed!');
                throw new Error('Image upload failed');
            }
        } catch (error) {
            toast.error('Image upload failed!');
            throw new Error('Image upload failed');
        }
    };

    const onSubmit = async (data) => {
        try {
            let imageUrl = '';
            if (data.image[0]) {
                imageUrl = await uploadImageToImgbb(data.image[0]);
            }
            const userCredential = await createUser(data.email, data.password);
            const user = userCredential.user;
            await updateUserProfile(data.name, imageUrl);
            toast.success('Registration successful!');
            reset(); // Clear form fields after successful registration
            navigate('/dashboard/profile')
        } catch (error) {
            toast.error(`Registration failed: ${error.message}`);
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
                <img className="mx-auto h-40 w-auto" src={registration} alt="Logo" />
            </div>

            <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-md border-2 border-primaryColor rounded-lg">
                <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register('name', { required: true })}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-600">Name is required</p>}
                        </div>

                        <div>
                            <input
                                {...register('email', { required: true })}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                placeholder="Enter your email address"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">Email is required</p>}
                        </div>

                        <div>
                            <input
                                {...register('image')}
                                id="image"
                                name="image"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                            />
                            {errors.image && <p className="mt-2 text-sm text-red-600">Please upload an image</p>}
                        </div>

                        <div>
                            <input
                                {...register('password', { required: true })}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="bg-transparent border-2 border-primaryColor appearance-none block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className="mt-2 text-sm text-red-600">Password is required</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/login" className="font-medium underline">
                                    Already have an Account? Please Login
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="secondaryButton mx-auto">
                                <SiGnuprivacyguard />
                                Register
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

export default RegistrationFrom;
