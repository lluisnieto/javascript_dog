import { Component, OnInit } from '@angular/core';
import { Animal } from './../app.component';

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.css']
})
export class DogComponent extends Animal implements OnInit {

    RUN_MIN: number;
    RUN_MAX: number;
    barkHistory: string[];
    fatigue: number;
    sleepFlag: boolean;

    constructor() {
        super();

        this.barkHistory = [];
        this.RUN_MIN = 50;
        this.RUN_MAX = 100;
        this.fatigue = 0;
        this.sleepFlag = false;
    }


    ngOnInit() {
        console.log('a puppy has been born.')
    }

    bark(): void {
        this.barkHistory.push('Wa!');
    }

    walk(): number {
        let val = Math.floor(Math.random() * 11);
        this.addFatigue(val);

        return val;
    }

    run(): number {
        let val = Math.floor(Math.random() * (this.RUN_MAX - this.RUN_MIN + 1)) + this.RUN_MIN;
        this.addFatigue(val);

        return val;
    }

    sleep(time: number): void {
        this.sleepFlag = true;
        setTimeout(
            () => {
                this.wakeUp();
            },
            time
        )
    }

    addFatigue(val: number): void {
        this.fatigue += val;
        console.log(this.fatigue);
    }

    wakeUp() {
        this.fatigue = 0;
        this.barkHistory = [];
        this.sleepFlag = false;
        console.clear();
    }

}
