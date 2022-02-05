const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        amount: 1,
        price: 10,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return console.log(`Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${order['address']['street']}, Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}`);
}

customerInfo(order);

const newOrder = Object.assign({}, order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = `Luiz Silva`;
  order.payment.total = 50;
  return console.log(`Olá ${order['name']}, o total do seu pedido de marguerita, pepperoni e ${order['order']['drinks']['coke']['type']} é R$ ${order['payment']['total'].toFixed(2)}`);
}

orderModifier(newOrder);
