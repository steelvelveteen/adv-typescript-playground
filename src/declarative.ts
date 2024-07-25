import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

const temperatures$ = from([32, 45, 50, 55, 60, 65, 70]);

temperatures$
    .pipe(
        filter((temperature: number) => temperature >= 50),
        reduce(
            (acc, temperature) => {
                acc.sum += temperature;
                acc.count += 1;
                return acc;
            },
            { sum: 0, count: 0 }
        )
    )
    .subscribe(({ sum, count }) => {
        const average = sum > 0 ? sum / count : 0;
        console.log(`Sum of even numbers: ${average}`);
    });
