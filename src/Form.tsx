type FormProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const Form = (props: FormProps) => {
    return (
            <>
                <label>
                    First Name:
                    <input type="text" value={props.firstName}></input>
                </label>
                
                <label>
                    Last Name:
                    <input type="text" value={props.lastName}></input>
                </label>
                <label>
                    Email:
                    <input type="email" value={props.email}></input>
                </label>
                <label>
                    Email:
                    <input type="tel" value={props.phone}></input>
                </label>

                <button>Submit</button>
            </>
                

        )
}