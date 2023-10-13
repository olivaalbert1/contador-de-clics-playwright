import React from "react";
import '../hojas-de-estilos/Contador.css'

function Contador({ numClics }) {
    return (
        <div className="contador" data-testid="contador">
            {numClics}
        </div>
    );
}

export default Contador;