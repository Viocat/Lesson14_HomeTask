"use strict"

void function(){

    //Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания — в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

    function randGen(){
        const arr=[];
        function mainGen(){
            let rand=Math.round(Math.random()*99+1);
            if(!arr.includes(rand)){
                arr.push(rand);
                return arr;
            }else{
                return mainGen();
            }
        }
        return mainGen;
    }

    let notRepRandInt100=randGen();

    console.log(notRepRandInt100());
    console.log(notRepRandInt100());
    console.log(notRepRandInt100());
    console.log(notRepRandInt100());
    console.log(notRepRandInt100());

}()