function convertFahrToCelsius(Fahr) {
  
    let type = typeof(Fahr);

    if (type === "number" || type === "string") {
        let convertString = parseInt(Fahr);
        if (isNaN(convertString)) {
            console.log(`${Fahr} is not a valid number but a/an ${type}`);
        }
        else {
        let C = (Fahr - 32) * 5/9;
        console.log(`${C.toFixed(4)}`);
        }
    }

    else if (Fahr instanceof Array) {
        console.log(`${JSON.stringify(Fahr)} is not a valid number but a/an array`)
    }

    else  {
        console.log(`${JSON.stringify(Fahr)} is not a valid number but a/an ${type}`)
    }
}

convertFahrToCelsius("0");

