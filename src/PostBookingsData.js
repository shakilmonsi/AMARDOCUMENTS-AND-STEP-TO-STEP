import React from 'react';

const PostBookingsData = () => 
//server post option
app.post('/bokings',async (req,res)=>{
    const booking =req.body 
    console.log(booking)
    const result= await bookingsCollextion.insertOne(booking)
    res.send(result)
  })
  



{
    //cliend post option
    fetch('http://localhost:5000/bokings',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(booking)
      })
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged){
        setTreatment(null)
        toast.success('bookings success fully')
    }
  
    return (
        <div>
            <h1>shakiol all project step to step</h1>
        </div>
    );
};

export default PostBookingsData;