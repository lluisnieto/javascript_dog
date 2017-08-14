import { Component } from '@angular/core';
import { Animal } from './../app.component';

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.css']
})
export class DogComponent extends Animal {

    RUN_MIN: number;
    RUN_MAX: number;
    barkHistory: string[];
    fatigue: number;
    sleepFlag: boolean;
    queuedActions: string[];

    SOUND_CRICKETS: any;
    SOUND_BARK: any;
    MULTIPLIER: number;

    nightDuration: number;
    secondsLeft: number;


    constructor() {
        super();

        this.barkHistory = [];
        this.RUN_MIN = 50;
        this.RUN_MAX = 100;
        this.fatigue = 0;
        this.sleepFlag = false;
        this.queuedActions = [];

        this.SOUND_CRICKETS = new Audio('assets/crickets.mp3');
        this.SOUND_CRICKETS.loop = true;
        this.SOUND_BARK = new Audio('assets/bark.mp3');

        this.MULTIPLIER = 10;

        this.nightDuration = 1;
    }


    // Dog barks.
    bark(): void {
        this.barkHistory.push('Wa!');
        this.SOUND_BARK.play();
    }

    // Dog takes a walk.
    walk(): number {
        let val = Math.floor(Math.random() * 11);

        return val;
    }

    // Dog starts running.
    run(): number {
        let val = Math.floor(Math.random() * (this.RUN_MAX - this.RUN_MIN + 1)) + this.RUN_MIN;

        return val;
    }

    // Dog goes to sleep for a determinate time in milliseconds.
    sleep(time: number): void {
        this.sleepFlag = true;
        this.SOUND_CRICKETS.play();
        let timer = this.playCountDown(time);
        setTimeout(
            () => {
                this.wakeUp();
                clearInterval(timer);
            },
            time * this.MULTIPLIER // multiplier to ease playing with dog
        )
    }

    // Adds fatigue to dog.
    addFatigue(val: number): void {
        this.fatigue += val;
        console.log(this.fatigue);
    }

    // Wakes up dog with fresh values and executes queued tasks if there are any.
    wakeUp(): void {
        console.clear();
        console.log('wake up');
        this.SOUND_CRICKETS.pause();
        this.SOUND_CRICKETS.currentTime = 0;
        this.fatigue = 0;
        this.barkHistory = [];
        this.sleepFlag = false;
        this.executeActions();
    }

    // Asks dog to do something. It will execute immediatly if is not sleeping or will queue actions.
    requestAction(identifier: string): void {
        this.queuedActions.push(identifier);
        if(!this.sleepFlag){
            this.executeActions();
        }
    }

    // Dog executes queued actions
    executeActions(): void {
        this.queuedActions.forEach(
            (action) => {
                let val = this[action]();
                if(val){
                    this.addFatigue(val);
                }
            }
        );
        this.queuedActions = [];
    }

    // Countdown till wake up
    playCountDown(time: number): any {
        this.nightDuration = Math.floor(time / 1000 * this.MULTIPLIER);
        this.secondsLeft = this.nightDuration;

        return setInterval(
            () => {
                this.secondsLeft --;
            },1000
        );
    }

}
