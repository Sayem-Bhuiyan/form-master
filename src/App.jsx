// import SimpleForm from "./components/SimpleForm/SimpleForm"
// import HookForm from "./components/HookForm/HookForm"
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefFrom/RefForm"
// import StateFulForm from "./components/StateFulForm/StateFulForm"

function App() {
  const handleSignUpSubmit = (data) => {
   console.log('sign up data', data)
  };

  const handleUpdateProfile = data=> {
    console.log('profile updata data', data)
  }

  return (
    <>
      {/* <SimpleForm /> */}
      {/* <StateFulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReusableForm 
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
       >
       <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
       </div>
       </ReusableForm>
      <ReusableForm 
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
       >
        <div>
          <h2>Update profile</h2>
          <h2>Always keep your profile update</h2>
        </div>
       </ReusableForm>
    </>
  );
}

export default App;
