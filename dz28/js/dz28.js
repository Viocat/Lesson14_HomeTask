"use strict";

void

function () {

    // Вам нужно написать функцию, которая принимает один параметр. При первом вызове она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд. Например: sum(3) = 3; sum(5) = 8; sum(20) = 28

    const sumClosed = (number) => {
        let result = 0;
        sum(number);
        const sum = n => result += n;
        return sum;
    }

    const sum = sumClosed(0);

    console.log(sum(4));
    console.log(sum(6));
    console.log(sum(9));

}()
