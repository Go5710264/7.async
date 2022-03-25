let clock = new AlarmClock; 
clock.addClock('12:35', () => console.log('Первый'), 1);
clock.addClock('12:36', () => {
    console.log('Второй'); 
    clock.removeClock(2)
}, 2);
// clock.addClock('12:37', () => console.log('Третий'));
clock.addClock('12:38', () => {
    console.log('Четвертый'); 
    clock.stop();
    clock.clearAlarms();
    clock.printAlarms();
}, 2);
clock.printAlarms();

clock.start();