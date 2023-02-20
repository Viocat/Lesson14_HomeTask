void function(){

    "use strict";

    // Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number. Вызов функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
    
    // Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease – уменьшать.

    // Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак не должен влиять на любой другой счетчик.

    const counter=()=>{
        let count=0;
        const increase=()=>count++;
        const decrease=()=>count--;
        const value=()=>count;
        return {increase, decrease,value};
    }

    let dogCount=counter();
    let catCount=counter();
    
    // пробуем:
    
    dogCount.increase();
    dogCount.increase();
    dogCount.increase();
    let dogsLeft=dogCount.value();
    console.log(dogsLeft);

    catCount.increase();
    catCount.increase();
    catCount.increase();
    catCount.increase();
    catCount.increase();
    console.log(catCount.value());

    let mouseCount=counter();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    mouseCount.increase();
    console.log(mouseCount.value());
    console.log(dogCount.value());

}()
