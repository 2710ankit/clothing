import React from "react";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import './Authenticate.scss'

const Authenticate = () => {
  // GOOGLE RIDIRECT AUTH
  // useEffect(() => {
  //   async function getRedirectResultFunction() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocummentFromAuth(response.user);
  //     }
  //   }
  //   getRedirectResultFunction();
  // }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authenticate;
