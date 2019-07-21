import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

import { filter, map, take, debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-observable',
    template: `See console for result`,
    styles: [``]
})
export class ObservablesComponent implements OnInit {

    firstSub$;
    secondSub$;
    intervalSub$;
    constructor() { }

    ngOnInit(): void {
        console.log('ngOnInit');
        const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            console.log('inside subscriber');
            setTimeout(() => {
                subscriber.next(200);
              //  subscriber.next(200);
               // subscriber.next(200);
                //  subscriber.error('Failed to process');
            }, 2400);
            setTimeout(() => {
                subscriber.next(3000);
                //  subscriber.error('Failed to process');
            }, 1500);
            setTimeout(() => {

                subscriber.next(4);
                subscriber.complete();
            }, 4000);
        });

    this.firstSub$ = observable
            .pipe(
                debounceTime(1000),
                map((item: number) => item *10))
            .subscribe((res) => {
                console.log('First ', res);
            }, (firstError) => {
                console.log('Handle first', firstError);
            }, () => {
                console.log('First complete');
            });


        // setTimeout(() => {
        //     firstSub.unsubscribe();
        // }, 2000);

        this.secondSub$ = observable
            .pipe(filter((item => item < 3)))
            .subscribe((res) => {
                console.log('Second ', res);
            });


            // interval

           this.intervalSub$ =  interval(1000)

           .pipe(take(10))
           .subscribe((res)=>{
                console.log('interval ', res);
            })



    }

    ngOnDestroy(): void {
       this.firstSub$.unsubscribe();
       this.secondSub$.unsubscribe();
       this.intervalSub$.unsubscribe();
        
    }
}
