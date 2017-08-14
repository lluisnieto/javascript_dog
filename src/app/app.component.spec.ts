import { TestBed, async } from '@angular/core/testing';

import { Animal } from './app.component';
import { DogComponent } from "./dog/dog.component";

describe('Animal', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Animal,
                DogComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(Animal);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
