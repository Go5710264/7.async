class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null; // id текущего таймера
    }

    addClock(time, parametrFunction, id) {
        if (!id) {
            throw new Error('Ошибка, id неопределен');
        } else if (this.alarmCollection.some((item) => item.id === id)) {
            console.error('Ошибка, такой id уже есть'); 
        } else {
            this.alarmCollection.push({time, parametrFunction, id});
        }
    }

    removeClock(id) { 
        let sourceLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((unnecessary) => unnecessary.id !== id); 
        
        return sourceLength > this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit", 
            minute: "2-digit",
          });
          return currentDate;
    }
    

    start() {

        let getCurrentFormattedTime = this.getCurrentFormattedTime.bind(this);

        function checkClock(call, func) {
            if(getCurrentFormattedTime() === call) {
                func();
            }
        };

        if (!this.timerId) {
            const checkTime = () => 
                this.alarmCollection.forEach((item) => 
                    checkClock(item.time, item.parametrFunction));

            this.timerId = setInterval(checkTime, 1000);
        }

    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`${item.id} ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
