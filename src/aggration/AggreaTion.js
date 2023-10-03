import React from 'react';

const AggreaTion = () => {
    return (
        <div>
               app.get('/v2/appointmentoption', async (req, res) => {
          const date = req.query.date;
          const options = await appointmentOptionCollextion.aggregate([
              {
                  $lookup: {
                      from: 'bookings',
                      localField: 'name',
                      foreignField: 'treatment',
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ['$appointmentDate', date]
                                  }
                              }
                          }
                      ],
                      as: 'booked'
                  }
              },
              {
                  $project: {
                      name: 1,
                      slots: 1,
                      booked: {
                          $map: {
                              input: '$booked',
                              as: 'book',
                              in: '$book.slot'
                          }
                      }
                  }
              },
              {
                  $project: {
                      name: 1,
                      slots: {
                          $setDifference: ['$slots', '$booked']
                      }
                  }
              }
          ]).toArray();
          res.send(options);
      })
        </div>
    );
};

export default AggreaTion;