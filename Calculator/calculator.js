let calculation =   localStorage.setItem('calculation', calculation) || '';
function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    saveData();

}

