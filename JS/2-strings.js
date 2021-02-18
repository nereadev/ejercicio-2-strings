
let pedido_comida = "me_gusta_la_pizza."

pedido_comida = pedido_comida.split("_");

let pedido_comida0 = pedido_comida[0][0].toUpperCase() + pedido_comida[0].slice(1);
let pedido_comida1 = pedido_comida[1][0].toUpperCase() + pedido_comida[1].slice(1);
let pedido_comida2 = pedido_comida[2][0].toUpperCase() + pedido_comida[2].slice(1);
let pedido_comida3 = pedido_comida[3][0].toUpperCase() + pedido_comida[3].slice(1);

let pedido_comida_final = pedido_comida0 + " " + pedido_comida1 + " " + pedido_comida2 + " " + pedido_comida3;

console.log(pedido_comida_final);


let pedidoComida = "meGustaLaPizza."

pedidoComida = pedidoComida.split(/(?=[A-Z])/);
pedidoComida = pedidoComida.map(name => name.toLowerCase());
pedidoComida = pedidoComida.join();
pedidoComidaFinal = pedidoComida.replaceAll(",", " ");

console.log(pedidoComidaFinal);
