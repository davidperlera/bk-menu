import React, { useState } from 'react';

import hamburger from '../Res/hamb.jpg'

// Props
// Variables o parametros que se envian al componente y son estaticos (no cambian)

// State
// Estado de un componente en un tiempo o con unas acciones en especifico

const MenuItem = ({ name, price }) => {
    const [ checked, setChecked ] = useState(false);


    return (
        <div className="rounded-lg shadow-xl w-4/5 bg-gray-200 claseWalter md:w-2/5 lg:w-1/4">
            <img className="rounded-t-lg"
             src={hamburger} alt="" />
            <div className="w-full text-center px-4 py-1 space-y-2">
                <h2 className="font-bold">{ name }</h2>
                <button
                onClick={() => setChecked(!checked)}
                 className={`mx-auto w-1/2 text-sm p-2 rounded-full
                shadow-sm text-blue-700 font-semibold ${ checked ? "bg-green-200" : "bg-yellow-200"}`}>
                    $ 10.99
                </button>
            </div>
        </div>
    )
}

export default MenuItem;