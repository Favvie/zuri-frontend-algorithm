
function checkYuGiOh(n) {
    let arr = [];
    let convertString = parseInt(n);
    if (isFinite(convertString)) {

        for(let index = 0; index < convertString; index++) {
            let number = index+1;


            if (number% 2 === 0 && number% 3 === 0 && number% 5 === 0) {
                arr[index] = "yu-gi-oh";
            }
            
            else if (number% 2 === 0 && number% 3 === 0) {
                arr[index] = "yu-gi";
            }

            else if (number% 2 === 0 && number% 5 === 0) {
                arr[index] = "yu-oh";
            }

            else if (number% 3 === 0 && number% 5 === 0) {
                arr[index] = "gi-oh";
            }

            else if (number%2 === 0) {
                arr[index] = "yu";
            }

            else if (number%3 === 0) {
                arr[index] = "gi";
            }

            else if (number%5 === 0) {
                arr[index] = "oh";
            }

            else{
                arr[index] = number;
            }

        }
        console.log(arr);
    }

    else {
        console.log(`invalid parameter: ${JSON.stringify(n)}`);
    }
}
checkYuGiOh("5");
