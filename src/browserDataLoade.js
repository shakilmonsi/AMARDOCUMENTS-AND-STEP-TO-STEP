import React from 'react';

const browserDataLoade = () => {

    //server frist data loade option 
    app.get('/appointmentoption', async (req,res)=>{
        const date= req.query.date ;
        console.log(date)
        const query ={}
        const option = await appointmentOptionCollextion.find(query).toArray();
      
      res.send(option)


      //cliend frist data loade option

      const AvolaoilAppointment=({selectedDate})=> {
        // const [appointmentOption ,setAppointmentOption]=useState([])
      const [treatment,setTreatment]=useState([])
      
    const date= format(selectedDate, 'PP')
    const {data:appointmentOption=[]}= useQuery({
      queryKey:['appointmentOption',date],
      queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/appointmentoption?date=${date}`)
      const data= await res.json()
      return data
      }
    })


    return (
        <div>
            
        </div>
    );
};

export default browserDataLoade;