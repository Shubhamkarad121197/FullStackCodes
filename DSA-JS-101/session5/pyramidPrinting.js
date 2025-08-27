function patternPrintingI(n) {
      const patternArray = []; 

    for (let i = 1; i <= n; i++) {
        let row = ''; 
        for (let j = 0; j < i; j++) {
            row += '*'+' ';
        }
        patternArray.push(row); 
    }

    return patternArray; 
}

console.log(patternPrintingI(5));