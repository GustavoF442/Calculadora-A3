function insert(num) {
    var numero = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = numero + num;
}

function clean () {
    document.getElementById('results').innerHTML = "";
}
 
function back () {
    var results = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = results.substring(0, results.length -1); 
}
 
function calculate () {
    var results = document.getElementById('results').innerHTML;

    if(results) {
        document.getElementById('results').innerHTML = eval(results);
    }

    else {
        document.getElementById('results').innerHTML = "Errooooooou";
    }
}   