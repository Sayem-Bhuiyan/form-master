import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const[name, handleNameChange] = useInputState('sayem');
    // const [email, handleEmailChange] = useInputState('');
    // const [password, handlePassChange] = useInputState('')

    const nameState = useInputState('')

    // const handleSubmit = e => {
    //      e.preventDefault();
    //      console.log('form data',name, email, password)
    // }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState)
    }

    return (
        <div className="m-10">
            {/* <form onSubmit={(e) =>handleSubmit(e)}>
                <input value={name} onChange={handleNameChange} className="border-2" type="text" name="name"/>
                <br />
                <input value={email} onChange={handleEmailChange} className="border-2" type="email" name="email"/>
                <br />
                <input value={password} onChange={handlePassChange} className="border-2" type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form> */}
            <form onSubmit={(e) =>handleSubmit(e)}>
                <input {...nameState} className="border-2" type="text" name="name"/>
                <br />
                <input className="border-2" type="email" name="email"/>
                <br />
                <input className="border-2" type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;