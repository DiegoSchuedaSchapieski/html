const pedidos = [{id: 1 },
    {cliente:"Guilherme"},
    {itens:[{Item:"Monster"}, {Quantidade: 10},{Valor:9.00}]},
    {status:"Aprovado"}]

const total = pedidos.reduce((acc, obj) => {
    if(obj.itens){
    const qtd = obj.itens.find( i => i.Quantidade)?.Quantidade || 0;
    const valor =  obj.itens.find(i => i.Valor)?.Valor || 0;   
    return acc + ( qtd * valor);
    }
    return acc;
}, 0);

pedidos.push({total: total});

console.log(pedidos);
    