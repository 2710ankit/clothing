import React from "react";
import { useState, useContext } from "react";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import Button from "../button/Button";
import {
  signInWithGooglePopup,
  createUserDocummentFromAuth,
  signInAuthUSerWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const defultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUSerWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password": {
          alert("Incorrect Password");
          break;
        }
        case "auth/user-not-found": {
          alert("No User With Email");
          break;
        }
        default: {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
