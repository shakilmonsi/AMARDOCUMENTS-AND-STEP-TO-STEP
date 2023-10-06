import React from 'react';

const Jwtsetup = () => {
    return (
        <div>
           {/* 1. setep  */}
           //class -75-4 jsonwebtoken setup 
app.get('/jwt', async (req, res) => {
        const email = req.query.email;
        const query = { email: email };
    const user= await userCollextion.findOne(query)
    console.log('jwt data ress',user)
    res.send({accessToken: 'token'})
})
            
        </div>
    );
};

export default Jwtsetup;