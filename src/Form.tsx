import { useState } from "react";

type FormProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    
}

export const Form = (props: FormProps) => {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);

    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

   


    return (
            <form onSubmit={handleSubmit} className="form">
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </label>
                
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </label>
                <label>
                    Email:
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}></input>
                </label>
                    <button type="submit">Submit</button>
           </form>
         
        )
}