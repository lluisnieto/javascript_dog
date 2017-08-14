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


    constructor() {
        super();

        this.barkHistory = [];
        this.RUN_MIN = 50;
        this.RUN_MAX = 100;
        this.fatigue = 0;
        this.sleepFlag = false;
        this.queuedActions = [];
    }

    // Dog barks.
    bark(): void {
        this.barkHistory.push('Wa!');
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
        setTimeout(
            () => {
                this.wakeUp();
            },
            time
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

}
