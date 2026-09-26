//Generar más fx de tipos cálculos.
//Las funciones flechas y anonimas no sufren de hoisting

const vlrSubtotal = (precio, cantidad) 
    => precio * cantidad


const vlrDescuento = (vlrSubtotal) 
    => vlrSubtotal * 0.10


const vlrIva = (vlrSubtotal, vlrDescuento) 
    => (vlrSubtotal - vlrDescuento) * 0.19


const vlrNeto = (vlrSubtotal, vlrDescuento, vlrIva) 
    => vlrSubtotal - vlrDescuento + vlrIva


function imprimirFactura(producto, precio, cantidad, subtotal, descuento, iva, neto) {
    console.log("***TIRILLA DE PAGINA***")
    console.log(`
        Producto--> ${producto}
        Precio--> ${precio}
        Cantidad--> ${cantidad}
        -------------------------
        Subtotal--> ${subtotal}
        Desc 10%--> ${descuento}
        Iva 19%--> ${iva}
        Neto Pagar--> ${neto}
        ***Gracias por su compra😁😁😁***
    `)
}

//fx pedirDatos, Nombre Producto, precio, cantidad

function pedirDatos() {
    let Producto = prompt("Producto")
    let Precio = Number(prompt("Precio"))
    let Cantidad = parseFloat(prompt("cantidad"))

    //Llamar las funciones que hacen los cálculos
    let subtotal = vlrSubtotal(Precio, Cantidad)
    let descuento = vlrDescuento(subtotal)
    let iva = vlrIva(subtotal, descuento)
    let neto = vlrNeto(subtotal, descuento, iva)

    imprimirFactura(
        Producto,
        Precio,
        Cantidad,
        subtotal,
        descuento,
        iva,
        neto
    )
}

pedirDatos()
