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
{/* .2.stpep send jwt cliend saite */}
//class -75-4 jsonwebtoken setup 
app.get('/jwt', async (req, res) => {
        const email = req.query.email;
        const query = { email: email };
    const user= await userCollextion.findOne(query)
    
if(user){
    const token = jwt.sing({email},process.env.ACCESS_TOKEN,{expiresIn:'1h'})
 return returnres.send({accessToken:token}) 

}
    console.log('jwt data ress',user)
    res.status(403).send({accessToken: ''})
})

            
        </div>
    );
};

export default Jwtsetup;