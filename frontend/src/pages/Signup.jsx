import React, { useState } from "react";

function Signup() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

            </div>
        </div>
    )
}

export default Signup;