import React from 'react';
import Header from './Header';

const produtos = [
    {
    bebida: "Vodka",
    marca: "Balalaika",
    valor: 17.04,
    volume: "1L",
    quantidade: 2
  },
  {
    bebida: "Whisky",
    marca: "Red_Label",
    valor: 90,
    volume: "750ML",
    quantidade: 3,
  },
]

function ListaPage() {
    return <div>
        <Header/>   
        <table>
            {
                produtos.map(bebida => (
                    <tr>
                        <td>{produtos.id}</td>
                        <td>{produtos.bebida}</td>
                        <td>{produtos.marca}</td>
                        <td>{produtos.valor}</td>
                        <td>{produtos.volume}</td>
                        <td>{produtos.quantidade}</td>
                    </tr>    
                ))
            }
        </table> 
    </div>
}

export default ListaPage;
