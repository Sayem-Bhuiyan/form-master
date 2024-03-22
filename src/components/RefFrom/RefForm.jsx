import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null)

    useEffect(()=> {
        nameRef.current.focus();
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passRef.current.value)
    }
    return (
        <div className="m-10 text-center">
            <form onSubmit={(e) =>handleSubmit(e)}>
                <input ref={nameRef} className="border-2" type="text" name="name"/>
                <br />
                <input ref={emailRef} className="border-2" type="email" name="email"/>
                <br />
                <input ref={passRef} className="border-2" type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;