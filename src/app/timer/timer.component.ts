import {Component,OnInit} from '@angular/core';
import {TimerService} from '../services/timer.service';


@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
     styleUrls: ['app/timer/timer.css']
})

export default class Timer {
  TimerService: any;
    public started: boolean;
    public timerService: TimerService;
    public time: number;

    private timer: any;

    constructor(timerService: TimerService) {
        this.timerService = timerService;
        this.time = 0;
        this.started = false;
    }

    formatTime(timeMs: number) {
        let minutes: string,
            seconds: string;

        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed(3);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    }

    getUpdate() {
        let self = this;

        return () => {
            self.time = this.TimerService.time();
        };
    }

    lap() {
        this.update();

        if (this.time) {
            this.TimerService.lap();
        }
    }

    reset() {
        this.TimerService.reset();
        this.started = false;
        this.update();
    }

    start() {
        this.timer = setInterval(this.getUpdate(), 1);
        this.TimerService.start();
    }

    stop() {
        clearInterval(this.timer);
        this.TimerService.stop();
    }

    toggle() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }

        this.started = !this.started;
    }

    update() {
        this.time = this.TimerService.time();
    }

    onClick() {
        console.log(this.TimerService);
    }
}
