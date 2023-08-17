import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userData=useLoaderData()
    console.log(userData);
    return (
        <div>
            <h1>Name: {userData.name}</h1>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Address: {userData.address?.city}</p>
        </div>
    );
};

export default UserDetails;