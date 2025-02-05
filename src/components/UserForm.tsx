import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const UserForm: React.FC = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser
      ? JSON.parse(savedUser)
      : { id: Date.now().toString(), name: "", address: "", email: "", phone: "" };
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setUser((prevUser: any) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  
  const handleSubmit = () => {
    const updatedUser = { ...user, id: Date.now().toString() }; // Ensure new ID on save
    localStorage.setItem("userData", JSON.stringify(updatedUser));
    setUser(updatedUser); // Update state with new ID
    setIsDirty(false);
    console.log("Saved User:", updatedUser); 
    alert("Data Saved!");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "60px auto" }}>
      <h2>User Data Form</h2>
      <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} value={user.name} />
      <TextField label="Address" name="address" fullWidth margin="normal" onChange={handleChange} value={user.address} />
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} value={user.email} />
      <TextField label="Phone" name="phone" fullWidth margin="normal" onChange={handleChange} value={user.phone} />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
