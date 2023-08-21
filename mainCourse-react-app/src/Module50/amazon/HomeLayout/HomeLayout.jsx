import React from 'react';
import AmazonNav from '../AmazonNav/AmazonNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <AmazonNav/>
            <Outlet/>



        </div>
    );
};

export default HomeLayout;