import React, { memo } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.init";

const Login = memo(() => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google login</button>
    </div>
  );
});

export default Login;
