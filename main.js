let clock = new AlarmClock; 
clock.addClock('19:04', () => console.log('Первый'), 1);
clock.addClock('19:05', () => {
    console.log('Второй'); 
    clock.removeClock(2)
}, 2);
// clock.addClock('12:37', () => console.log('Третий'));
clock.addClock('19:06', () => {
    console.log('Четвертый'); 
    clock.stop();
    clock.clearAlarms();
    clock.printAlarms();
}, 2);

clock.printAlarms();
clock.start();


