let button=document.querySelector(".i-busqueda");
buscar=parseInt(buscar);

button.onclick=function datos(e){
    e.preventDefault();
let buscar=document.getElementById("buscar").value;
let res=document.querySelector(".res");
let res1=document.querySelector(".res1");
let infoModal1=document.querySelector(".infoModal1");
let datosModal=document.querySelector(".datosModal");

switch(buscar){
    case"52368795":
        res.style.setProperty("visibility","visible");
        res.style.setProperty("opacity","1");
        datosModal.innerHTML=`
        <p>52368795</p>
        <p>Luisa Casallas</p>
        <p>Sinovac</p>
        <p>02/05/2021</p>
        <p>No registra</p>
        <p>No registra</p>
        <p>1</p>
        `
    break;

    case"1001235478":
    res.style.setProperty("visibility","visible");
    res.style.setProperty("opacity","1");
    datosModal.innerHTML=`
    <p>1001235478</p>
    <p>Mario Lopez</p>
    <p>Pfizer</p>
    <p>03/07/2021</p>
    <p>15/10/2021</p>
    <p>No registra</p>
    <p>2</p>
    `
    break;

    case"25413574":
    res.style.setProperty("visibility","visible");
    res.style.setProperty("opacity","1");
    datosModal.innerHTML=`
    <p>25413574</p>
    <p>Valeria Cardona</p>
    <p>Moderna</p>
    <p>05/01/2021</p>
    <p>07/03/2021</p>
    <p>10/05/2021</p>
    <p>3</p>
    `
    break;

    case"1007203506":
    res1.style.setProperty("visibility","visible");
    res1.style.setProperty("opacity","1");
    infoModal1.innerHTML=`
    <p>Este usuario no se encuentra registrado</p>
    `
    break;

    default:
        alert("Escriba correctamente el numero de identificacion")
    break;
}

}