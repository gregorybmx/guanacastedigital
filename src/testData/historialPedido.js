import React from 'react'

function HistorialPedidos() {

    const headers = ['Numero de Pedido', 'Fecha del Pedido', 'Estado', 'Monto']

    const rows = [
        {
            pedido: "1",
            fecha: "27/9/2022",
            estado: "Completado",
            monto: "75000"
        },
        {
            pedido: "2",
            fecha: "27/9/2022",
            estado: "Completado",
            monto: "45000"
        },
        {
            pedido: "3",
            fecha: "27/9/2022",
            estado: "Rechazado",
            monto: "20000"
        }
    ]

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                            headers.map((head) => (<th scope="col" key={head}>{head}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => (
                            <tr key={row.pedido}>
                                <th scope="row">{row.pedido}</th>
                                <td>{row.fecha}</td>
                                <td>{row.estado}</td>
                                <td>{row.monto}</td>
                            </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HistorialPedidos