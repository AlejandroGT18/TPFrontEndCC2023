// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



// function cantidadTickets() {
//     console.log('Ingresó al total a pagar')

//     const precioDelTicket = 1000

//     let cantidadDeTickets = document.getElementById('laCantidad').value
//     console.log(cantidadDeTickets)

//     let totalSinDesc = cantidadDeTickets * precioDelTicket
//     console.log('El total a pagar es ' + totalSinDesc)

//     let descuento = document.getElementById('descuentosDisponibles').value

//     if (cantidadDeTickets >= 1) {

//         totalSinDesc = totalSinDesc - (descuento * totalSinDesc / 100)

//         document.getElementById('totalApagar').className = "text-dark"
//         document.getElementById('totalApagar').innerHTML = totalSinDesc    
//     } else {
//         document.getElementById('totalApagar').className = "text-danger"
//         document.getElementById('totalApagar').innerHTML = "Tiene que comprar al menos 1 ticket"
//     }

    
// }


// Click en las tarjetas de Descuetos
function clickbtnInvitado() {
    console.log('Hizo click')

    const precioDelTicket = 1000
    let descuento = 0 * precioDelTicket / 100
    let totalConDesc = precioDelTicket - descuento
    
    
    document.getElementById('totalApagar').innerHTML = totalConDesc
}

function clickbtnEstudiante() {
    console.log('Hizo click')

    const precioDelTicket = 1000
    let descuento = 15 * precioDelTicket / 100
    let totalConDesc = precioDelTicket - descuento
    
    
    document.getElementById('totalApagar').innerHTML = totalConDesc
}

function clickbtnProfesor() {
    console.log('Hizo click')

    const precioDelTicket = 1000
    let descuento = 30 * precioDelTicket / 100
    let totalConDesc = precioDelTicket - descuento
    
    
    document.getElementById('totalApagar').innerHTML = totalConDesc
}
// ==============================================================


// Calculo del total con los Descuentos
// function btnDelTotal() {
//     console.log('click')

//     const precioDelTicket = 1000
//     let cantidadDeTickets = document.getElementById('laCantidad').value
//     let precioSinDescuento = cantidadDeTickets * precioDelTicket
//     let descuentos = document.getElementById('descuentosDisponibles').value

//     let precioFinalConDesc = precioSinDescuento - (descuentos * precioSinDescuento / 100)

//     document.getElementById('totalApagar').innerHTML = precioFinalConDesc
// }
// // ==============================================================
