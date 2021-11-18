import { useState } from "react";
import FormularioCategoria from "./FormularioCategoria";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
    const [listaCategoria, setListaCategoria] = useState(['risa', 'tristesa', 'enojo']);

    const agregarCategoria = (categoriaNueva: string): boolean => {
        let agregado: boolean = false;
        if (!listaCategoria.find(c => c === categoriaNueva))
        {
            setListaCategoria([
                ...listaCategoria,
                categoriaNueva
            ]);
            agregado = true;
        }

        return agregado;
    };

    const busqueda = listaCategoria[listaCategoria.length - 1];
    console.log("renderizado componente pricipal...");
    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />
            <FormularioCategoria 
                agregarCategoria={ agregarCategoria }
            />
            <div className="categorias">
                {
                    <GifGrid 
                        categoria={ busqueda }
                    />
                }
            </div>
        </>
    )
}

export default GifExpertApp;