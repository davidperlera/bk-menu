import React, { useRef, useState } from 'react';

import MenuItem from './MenuItem'

// Hooks
// Funciones que proveen funcionalidad extra para hacer ciertas acciones

const Menu = () => {
    // Uso de useRef
    const myInput = useRef(null);
    
    // Declaraion de un estado
    const [ menuItems, setMenuItems ] = useState([]);

    function addNewMenuItem() {
        setMenuItems([ ...menuItems, myInput.current.value ]);
    }

    return (
        <div>
            <div className="w-full flex flex-col px-10 my-10 space-y-5">
                <input className="px-2 py-1 border border-yellow-800 rounded-lg"
                type="text" placeholder="Nombre de la hamburguesa"
                ref={myInput}/>
                <button 
                onClick={addNewMenuItem}
                className="bg-green-500 px-3 py-2 rounded-lg shadow-lg text-white font-semibold hover:text-gray-800"
                type="button">Agregar al menu</button>
            </div>
            <div className="flex flex-row justify-center flex-wrap space-y-4">
                {
                    menuItems.map(it => <MenuItem name={it} />)
                }
            </div>
        </div>
    );
}

export default Menu;