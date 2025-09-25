import React, { useState } from "react";
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

function Signup() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center pt-30">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your infromation to create an account"} />
                    <InputBox placeholder={"John"} label={"First Name"} onChange={(e) => {
                        setFirstName(e.target.value);
                    }} />

                    <InputBox placeholder={"Doe"} label={"Last Name"} onChange={(e) => {
                        setLastName(e.target.value)
                    }} />

                    <InputBox placeholder={"John@example.com"} label={"Username"} onChange={(e) => {
                        setUsername(e.target.value);
                    }} />

                    <InputBox placeholder={"12345"} label={"Password"} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />

                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem('token', response.data.token);
                            navigate('/dashboard')
                        }} label={"Sign up"}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Signup;