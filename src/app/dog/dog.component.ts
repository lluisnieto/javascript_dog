import { Component } from '@angular/core';
import { Animal } from './../app.component';

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.css']
})
export class DogComponent extends Animal {

    barkHistory: string[];
    fatigue: number;
    sleepFlag: boolean;
    queuedActions: string[];

    RUN_MIN: number;
    RUN_MAX: number;
    WALK_MIN: number;
    WALK_MAX: number;

    SOUND_CRICKETS: any;
    SOUND_BARK: any;
    MULTIPLIER: number;

    nightDuration: number;
    secondsLeft: number;


    constructor() {
        super();

        this.barkHistory = [];
        this.fatigue = 0;
        this.sleepFlag = false;
        this.queuedActions = [];

        this.RUN_MIN = 50;
        this.RUN_MAX = 100;

        this.WALK_MAX = 10;
        this.WALK_MIN = 0;

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
        return this.getRandomIntFromRange(this.WALK_MIN, this.WALK_MAX);
    }

    // Dog starts running.
    run(): number {
        return this.getRandomIntFromRange(this.RUN_MIN, this.RUN_MAX);
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
        this.nightDuration = Math.floor(time / 1000 * this.MULTIPLIER); // Convert to seconds (and applies multiplier)
        this.secondsLeft = this.nightDuration;

        return setInterval(
            () => {
                this.secondsLeft --;
            },1000
        );
    }

    // Returns random integer from range
    getRandomIntFromRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

}
