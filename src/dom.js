import{getData, createRelevantObj} from './data-processing.js';

function inputEV() {
    let input= document.querySelector('input[type]');
    input.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            let rawData= getData(input.value)
            .then(function(rawData){
                return createRelevantObj(rawData);
            })
            .then(function(processedData) {
                console.log(processedData)
            })
            .catch(err => console.error(err));
        }
    })
}

export {inputEV};