void

function () {
    "use strict"
    
    function getPolindrom(num) {
        return innerGetPolindrom();

        function innerGetPolindrom(n = num, i = 0) {
            let reversed = +n.toString().split('').reverse().join('');
            if (reversed === n) {
                return {
                    result: n,
                    steps: i
                };
            } else {
                i++;
                return innerGetPolindrom(n + reversed, i);
            }
        }
    }
    let num = 312;
    const palindrom = getPolindrom(num);
    console.log(`palindrom =`, palindrom);
}()