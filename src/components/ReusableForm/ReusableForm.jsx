const ReusableForm = ({formTitle, handleSubmit ,submitBtnText="Submit", children}) => {
   
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div className="m-10">
            {children}
            <form onSubmit={(e) =>handleLocalSubmit(e)}>
                <input className="border-2" type="text" name="name"/>
                <br />
                <input className="border-2" type="email" name="email"/>
                <br />
                <input className="border-2" type="password" name="password"/>
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;