const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div className="m-10">
            <form onSubmit={(e) =>handleSubmit(e)}>
                <input className="border-2" type="text" name="name"/>
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

export default SimpleForm;