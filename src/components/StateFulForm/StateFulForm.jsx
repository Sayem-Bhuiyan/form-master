import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6) {
        setError('Password must be greater than 6 charecter')
    }
    else{
        setError('');
        console.log(name, email, password);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="m-10 text-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={handleChangeName}
          className="border-2"
          type="text"
          name="name"
          required
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="border-2"
          type="email"
          name="email"
          required
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="border-2"
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2 className="text-2xl text-red-500 text-center mt-2">{error}</h2>
    </div>
  );
};

export default StateFulForm;
