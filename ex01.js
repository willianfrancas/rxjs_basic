import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

const legalAgeGroupedByGender = () => source$ =>
    source$.pipe(
        filter(p => p.age >= 18),
        reduce((a, b) => ({
            ...a,
            [b.gender]: [...(a[b.gender] || []), b]
        }),
            {})
    );

    const people = [
    { name: 'João', gender: 'male', age: 12 },
    { name: 'Maria', gender: 'female', age: 22 },
    { name: 'Alberto', gender: 'male', age: 42 },
    { name: 'Carol', gender: 'female', age: 26 },
    { name: 'José', gender: 'male', age: 18 },
    { name: 'Francisca', gender: 'female', age: 14 },
    { name: 'Antonio', gender: 'male', age: 19 },
    { name: 'Regina', gender: 'female', age: 31 },
    { name: 'Adoniram', gender: 'male', age: 50 },
    { name: 'Benedita', gender: 'female', age: 22 },
    { name: 'Wagner', gender: 'male', age: 28 },
    { name: 'Teresa', gender: 'female', age: 15 },
];

from(people)
    .pipe(legalAgeGroupedByGender())
    .subscribe(people => console.log(people));