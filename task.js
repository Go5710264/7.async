class AlarmClock {
    constructor(time, id) {
        this.alarmCollection = [];
        this.timerId = id;
        this.alarmCollection.push(time);
        //this.timerId.push(id);
        // let alarmCollection = [];
        // let timerId = [];
        // alarmCollection.push(time);
        // timerId.push(id);
    }

    addClock(time, parametrFunction, id) {
        if (id === undefined) {
            throw new Error('Ошибка, id неопределен');
        } else if (id === this.timerId) {
            console.error('Ошибка, такой id уже есть'); 
        }
        return new AlarmClock(time, id, parametrFunction);
    }

    removeClock(id) {
        let unnecessaryClock = this.timerId.filter(
            (unnecessary) => unnecessary.this.timerId === id
        )
        if (unnecessaryClock === true) {
            delete this.timerId;
            console.log ('Удаление произошло успешно');
        } else {
            console.log('Будильника с таким id нет');
        }
    }

    getCurrentFormattedTime() {
        return new Date();
    }
}
