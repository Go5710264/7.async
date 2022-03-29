let clock = new AlarmClock; 
clock.addClock('11:42', () => console.log('Первый'), 1);
clock.addClock('11:43', () => {
    console.log('Второй'); 
    clock.removeClock(2)
}, 2);
// clock.addClock('12:37', () => console.log('Третий'));
clock.addClock('11:44', () => {
    console.log('Четвертый'); 
    // clock.stop();
    // clock.clearAlarms();
    // clock.printAlarms();
}, 2);
clock.printAlarms();

clock.removeClock(7);
// clock.getCurrentFormattedTime();
clock.start();
clock.stop();
// clock.clearAlarms();
// clock.printAlarms();

