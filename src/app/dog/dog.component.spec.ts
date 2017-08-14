import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';

describe('DogComponent', () => {
    let component: DogComponent;
    let fixture: ComponentFixture<DogComponent>;
    let sleepDuration: number;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DogComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        sleepDuration = component.getRandomIntFromRange(500, 5000);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should bark', () => {
        let currentBarks = component.barkHistory.length;
        component.bark();
        expect(component.barkHistory.length).toBeGreaterThan(currentBarks);
    });

    it('should walk', () => {
        let walk = component.walk();
        expect(walk).toBeGreaterThan(0);
        expect(walk).not.toBeGreaterThan(10);
    });

    it('should run', () => {
        let run = component.run();
        expect(run).toBeGreaterThan(49);
        expect(run).not.toBeGreaterThan(100);
    });

    it('should sleep',  (done) => {
        component.sleep(sleepDuration);
        setTimeout(
            () => {
                expect(component.sleepFlag).toBeTruthy();
                done();
            },
            sleepDuration / 2
        );

    });

    it('should wakeup',  () => {
        component.sleepFlag = true;
        component.wakeUp();
        expect(component.sleepFlag).toBeFalsy();
    });

});
