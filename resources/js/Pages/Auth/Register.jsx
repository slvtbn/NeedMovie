import { useEffect } from 'react'
import Label from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import Button from '@/Components/Button'
import {Link, Head, useForm} from '@inertiajs/react'
import '../../../css/input.css'
import '../../../css/button.css'

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        }
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    }
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label 
                                        htmlFor="name"
                                        value="Full Name"
                                    />
                                    <TextInput 
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your Full Name"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <Label 
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <TextInput 
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email Address"
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div>
                                    <Label 
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <TextInput 
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Your Password"
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <Label 
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <TextInput 
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Confirm Your Password"
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button processing={processing} type="submit" variant="primary">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>

                                <Link href={route('login')}>
                                    <Button type="button" variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}