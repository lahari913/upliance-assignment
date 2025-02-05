import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { Button, Box, Typography } from "@mui/material";

interface AuthProps {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const Auth: React.FC<AuthProps> = ({ user, setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: user ? "space-between" : "center",
        alignItems: user ? "flex-start" : "center", // Center sign-in screen
        flexDirection: user ? "row" : "column", // Row for user info, column for sign-in
        textAlign: "center",
        padding: "10px 20px",
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100vh", // Full height for proper centering
        boxSizing: "border-box",
        backgroundColor: user ? "transparent" : "#f4f4f4", 
        overflow: "hidden",
      }}
    >
      {user ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
            gap: 1,
            position: "absolute",
            top: 10,
            right: 20, 
          }}
        >
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User"
              width="50"
              style={{ borderRadius: "50%" }}
            />
          )}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            {user.displayName}
          </Typography>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Welcome to React Project
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "40px",
              color: "#555",
              maxWidth: "500px",
            }}
          >
            Sign in with your Google account to access the features of the app,
            including the counter, user form, and rich text editor.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
        </>
      )}
    </Box>
  );
};

export default Auth;
