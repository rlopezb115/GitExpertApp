import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface props {
    agregarCategoria: (categoriaNueva: string) => boolean
} 

const FormularioCategoria = ({ agregarCategoria }: props) => {
    const [categoria, setCategoria] = useState("");

    const actualizarCategoria = (nombre: string) => {
        setCategoria(nombre);
    };

    const handleSubmitCategoria = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();

        if (categoria === '')
        {
            alert("La categoria se encuentra vacía, no es posible agregar.");
            return;
        }

        if (agregarCategoria(categoria))
        {
            setCategoria("");
        }
        else
        {
            alert('La categoria ya existe');
        }
    }

    return (
        <form 
            className="formulario"
            onSubmit={ handleSubmitCategoria }
        >
            <input 
                type="text" 
                className="field" 
                name="categoria" 
                id="categoria"
                value={ categoria }
                onChange={ e => actualizarCategoria(e.target.value) }
                placeholder="buscar categoria..."
            />
        </form>
    )
}

FormularioCategoria.propTypes = {
    agregarCategoria: PropTypes.func.isRequired
}

export default FormularioCategoria;