class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined; // id текущего таймера
    }

    addClock(time, parametrFunction, id) {
        if (id === undefined) {
            throw new Error('Ошибка, id неопределен');
        } else if (this.alarmCollection.some((item) => item === id)) { // не выводит true, когда добавляю будильник с id который уже есть в массиве
            console.error('Ошибка, такой id уже есть'); 
        } else {
            return this.alarmCollection.push({time, parametrFunction, id});
        }
    }

    removeClock(id) {
        let sourceLength = this.alarmCollection.length;
        let newAlarmArray = this.alarmCollection.filter(
            (unnecessary) => unnecessary.id !== id
        ); 
        
        this.alarmCollection = newAlarmArray;
         
        if (sourceLength === newAlarmArray.length) {
            return console.log('Удаление не выполнено, перепроверте id будильника');
        } else {
            return console.log('Удаление выполенено успешно!');
        }
    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        let hours = String(currentDate.getHours());
        let minutes = String(currentDate.getMinutes());
        return hours + ':' + minutes;
    }

    start() {
        function cheackClock(call, callBack) {
            if(clock.getCurrentFormattedTime() === call) {
                //необходимо использовать bind2??
                callBack; //как вызвать колбек определенного массива?
            }
        };

        if (this.timerId === undefined) {
            const cheackTime = () => this.alarmCollection.forEach((item) => cheackClock(item.time, item.parametrFunction));
            return this.timerId = setInterval(cheackTime, 60000); // каждую минуту будет вызываться проверка 
        }

    }

    stop() {
        this.alarmCollection.find(function(item, index, arrey) {
            if (item.id !== undefined) {
                clearInterval();
                delete item.id;
            }
        })
        // if (this.alarmCollection.id !== undefined) {
        //     clearInterval();
        //     this.timerId = undefined;
        // }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`${item.id} ${item.time}`));
    }

    clearAlarms() {
        clearInterval();
        this.alarmCollection = [];
    }
}
