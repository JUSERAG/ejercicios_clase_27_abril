'user strict'


function operaciones(){
    let numero1=parseInt(document.getElementById("num1").value);
    let numero2=parseInt(document.getElementById("num2").value);
    let tipoOperacion=document.getElementById("operacion").value;
    let respuesta;
    switch(tipoOperacion){
        case 'sum':
            respuesta=numero1+numero2;
            break;
        case 'rest':
            respuesta=numero1-numero2;
            break;
        case 'mult':
            respuesta=numero1*numero2;
            break;
        case 'div':
            try {
                respuesta=numero1/numero2;
            } catch {
                alert("ERROR, VUELVA A DIGITAR VALORES");
            }finally{
                document.getElementById("resultado").innerHTML = "ERROR, INGRESE OTROS VALORES";
            }

            break;
    }
    document.getElementById("resultado").innerHTML = `<label>El resultado es: ${respuesta}</label>`;
}