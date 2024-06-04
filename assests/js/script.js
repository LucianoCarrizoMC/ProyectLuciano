import {registrarPersona, obtenerPersonas, actualizarPersona, eliminarPersona} from "./promesas.js"
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar)
    traerDatosjpg()
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
    document.getElementById("btnEliminar").addEventListener("click",eliminar);


})
const registrar=()=>{
    let eNombre=document.getElementById("nombre");
    let eApellido=document.getElementById("apellido");
    let eRut=document.getElementById("rut");
    let eCorreo=document.getElementById("correo");
    let eEdad=document.getElementById("edad");
    let eFnacimiento=document.getElementById("fnacimiento");

    let vNombre=eNombre.value;
    let vApellido=eApellido.value;
    let vRut=eRut.value;
    let vCorreo=eCorreo.value;
    let vEdad=eEdad.value;
    let vFnacimiento=eFnacimiento.value;

    let objeto={nombre:vNombre,
        apellido:vApellido,
        rut:vRut,
        correo:vCorreo,
        edad:vEdad,
        fnacimietno:vFnacimiento}
    registrarPersona(objeto).then(()=>{
        alert("copeteeeeeeeeeee");
        traerDatosjpg()
        limpiarFormulario("")

    }).catch((r)=>{
        console.log(r)
    });
}
const traerDatosjpg=()=>{
    obtenerPersonas().then((personas)=>{
        let estructura="";
        console.log(personas)
        console.log("holaaa");
        personas.forEach((p)=>{
            estructura +="<tr>";
            estructura +="<td>"+p.nombre+"</td>";
            estructura +="<td>"+p.apellido+"</td>";
            estructura +="<td>"+p.rut+"</td>";
            estructura +="<td>"+p.correo+"</td>";
            estructura +="<td>"+p.edad+"</td>";
            estructura +="<td>"+p.fnacimietno+"</td>";
            estructura +="<td><button id='UPD"+p.id+"'>Actualizar</button></td>";
            estructura +="<td><button id='DEL"+p.id+"'>Eliminar</button></td>";
            estructura +="</tr>";
        });
        console.log(estructura)
        document.getElementById("tbPersonas").innerHTML=estructura
        personas.forEach((p)=>{
            let elemento=document.getElementById("UPD"+p.id)
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value=p.nombre;
                document.getElementById("UPDapellido").value=p.apellido;
                document.getElementById("UPDrut").value=p.rut;
                document.getElementById("UPDcorreo").value=p.correo;
                document.getElementById("UPDedad").value=p.edad;
                document.getElementById("UPDfnacimiento").value=p.fnacimietno;
                document.getElementById("btnActualizar").value=p.id;

                //alert("diste click al copeteeeeeee:"+p.rut)
            })
            /*
            1.Recupero el boron de eliminar de cada fila
            2.Agrego un listener tipo click
            3.Asigno id del documento al boton eliminar del fomrulario
            */
            let elemnto1=document.getElementById("DEL"+p.id)
            elemnto1.addEventListener("click",()=>{
                document.getElementById("DELnombre").value=p.nombre;
                document.getElementById("DELapellido").value=p.apellido;
                document.getElementById("DELrut").value=p.rut;
                document.getElementById("DELcorreo").value=p.correo;
                document.getElementById("DELedad").value=p.edad;
                document.getElementById("DELfnacimiento").value=p.fnacimietno;
                document.getElementById("btnEliminar").value=p.id;

                // if(confirm("vas a eliminar a;\n"+p.nombre" "+p.apellido)){
                //     eliminarPersona(p.id).them()=>{
                //         alert("se elimina con exito");
                //         traerDatosjpg();
                //     }
                // }
                
            })
        })
    });
}

const actualizar=()=>{
    let eNombre=document.getElementById("UPDnombre");
    let eApellido=document.getElementById("UPDapellido");
    let eRut=document.getElementById("UPDrut");
    let eCorreo=document.getElementById("UPDcorreo");
    let eEdad=document.getElementById("UPDedad");
    let eFnacimiento=document.getElementById("UPDfnacimiento");

    let vNombre=eNombre.value;
    let vApellido=eApellido.value;
    let vRut=eRut.value;
    let vCorreo=eCorreo.value;
    let vEdad=eEdad.value;
    let vFnacimiento=eFnacimiento.value;

    let objeto={nombre:vNombre,
        apellido:vApellido,
        rut:vRut,
        correo:vCorreo,
        edad:vEdad,
        fnacimietno:vFnacimiento
    };
    let id=document.getElementById("btnActualizar").value;
    actualizarPersona(objeto,id).then(()=>{
        alert("se actualizo bien mi chanchito")
        traerDatosjpg();
        limpiarFormulario("UPD")
    }).catch((e)=>{
        console.log(e)
    })

};

const eliminar=()=>{
    let id=document.getElementById("btnEliminar").value;
    eliminarPersona(id).them(()=>{
        alert("se elimibno con exito")
        traerDatosjpg();
        limpiarFormulario("DEL")
    }).catch((e)=>{
        console.log(e)
    })
}
const limpiarFormulario=()=>{
    let eNombre=document.getElementById(txt+"nombre");
    let eApellido=document.getElementById(txt+"apellido");
    let eRut=document.getElementById(txt+"rut");
    let eCorreo=document.getElementById(txt+"correo");
    let eEdad=document.getElementById(txt+"edad");
    let eFnacimiento=document.getElementById(txt+"fnacimiento");
    eNombre.value="";
    eApellido.value="";
    eRut.value="";
    eCorreo.value="";
    eEdad.value="";
    eFnacimiento.value="";
}