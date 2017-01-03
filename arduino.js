'use strict';

const five = require('johnny-five');
const board = new five.Board();

module.exports = function() {
  console.log('______________________|===========|__________________________');
  console.log('______________________|--Arduino--|__________________________');
  console.log('______________________|===========|__________________________');

  // --------------------------
  // Temperature sensor
  // --------------------------
  //     const temperature = new five.Thermometer({
  //       controller: 'TMP36', // 'DS18B20',
  //       pin: 'A5',
  //       freq: 2000
  //     });
  //
  //     temperature.on('change', function() {
  //       console.log(this.fahrenheit);
  //     });
  //   });
  // };
  board.on('ready', function() {
    const multi = new five.Multi({
        controller: 'HIH6130'
    });

    multi.on('change', function() {
      console.log('Thermometer');
      console.log('  fahrenheit        : ', this.thermometer.fahrenheit);
      console.log('--------------------------------------');

      console.log('Hygrometer');
      console.log('  relative humidity : ', this.hygrometer.relativeHumidity);
      console.log('--------------------------------------');
    });

    // multi.on('data', function() {
    //   console.log('Temperature sensor: ')
    //   console.log(this.celsius + '°C');
    //   console.log('\n');
    //
    //   // Transmit it
    //   temperature.emit('temp', this.celsius);
    // });
  });
}
  //--------------------------
  // Servo
  //--------------------------
  // servo = new five.Servo({
  //     pin: 12,
  //     type: 'continuous'
  // });
  //
  // servo.stop();
  // daylights.off();

  // function lightScheduler(){
  //
  //   getCurrentTime();
  //   console.log('current hour is ' + currentHour);
  //
  //   if (dayLightSchedule = true) {
  //
  //     if (currentHour >= dayLightStartTime && currentHour <= dayLightEndTime) {
  //         daylights.on();
  //     } else {
  //       daylights.off();
  //       console.log('Daylight off')
  //     }
  //   }
  // }

  // On first client connection start a new game
    // io.sockets.on('connection', (socket) => {
    //
    //     connectCounter++;
    //     console.log('connections: '+connectCounter);
    //     console.log('New device connected'.green);
    //     io.emit('status', 'New device connected!');
    //
    //     sendSettings();
    //
    //     socket.on('disconnect', function() {
    //         connectCounter--; console.log('connections: '+connectCounter);
    //     });
    //
    //     socket.on('status', function(data){
    //         console.log(data);
    //     });
    //
    //     socket.on('schedule', function(data){
    //         console.log('new schedule data '+data);
    //         lightSchedule = data;
    //         console.log('start is '+ lightSchedule[0]);
    //         dayLightStartTime = lightSchedule[0];
    //
    //         console.log('end is '+ lightSchedule[1]);
    //         dayLightEndTime = lightSchedule[1];
    //
    //         broadcastSettings();
    //
    //     });
    //
    //     socket.on('settings', function(data){
    //         console.log(data);
    //         dayLightSchedule= data.dayLightSchedule;
    //         dayLightState= data.dayLightState;
    //         nightLightState= data.nightLightState;
    //         dayLightStartTime= data.dayLightStartTime;
    //         dayLightEndTime= data.dayLightEndTime;
    //         sendSettings();
    //
    //     });
    //
    //     socket.on('lights', function(data){
    //
    //         console.log(data);
    //         if (data == 'day-on') {
    //             console.log('data was dayon!!');
    //             daylights.on();
    //         };
    //
    //         if (data == 'day-off') {
    //             console.log('data was dayon!!');
    //             daylights.off();
    //         };
    //
    //         if (data == 'night-on') {
    //             console.log('data was dayon!!');
    //             nightlights.on();
    //             daylights.off();
    //         };
    //
    //         if (data == 'night-off') {
    //             console.log('data was dayon!!');
    //             nightlights.off();
    //         };
    //     });
    //
    //     socket.on('feeder', function(data){
    //         console.log(data);
    //         if (data == 'feed-1') {
    //             console.log('feed 1 pressed');
    //
    //             servo.cw(0.8);
    //             setTimeout(function() {
    //                 servo.stop();
    //             }, 400);
    //         };
    //
    //         if (data == 'feed-2') {
    //             console.log('feed 2 pressed');
    //             servo.ccw(0.8);
    //             setTimeout(function() {
    //                 servo.stop();
    //             }, 400);
    //
    //         };
    //     });

      //   setInterval(function(){
      //       io.emit('waterlevel', waterlevel);
      //   }, 1000);
      //
      // });
  // }); // end socket connection
// };
