# React Tree

# Profile.js
- Includes Provider to switch between Login, Register and Profile (Which Contains Logout Option)
- 
- - Option to Login / Logout
- - - Login has option to Register or Login
- - - Logout, logs out and redirects to login page
- - Data is stored in Rapi Redux Slice 
- - - This slice is brought into store in main app for use across the app. 

# Login
# Register
# 
# Scope
- This app is ONLY for logging in, Logging out, and Registering with RAPI. 
- It is considered out of scope to include requests outside the above.

# Testing
- Use API "https://randomuser.me/api" to generate 10 random sample users.

# Packages Required
- npm i @reduxjs/toolkit
- npm i react-fetch-hook
- npm i react-redux
- npm create-react-app
- npm react-router-dom

# Sub Components
- login
- Register
- Update Profile Data
- Save Data to Redux