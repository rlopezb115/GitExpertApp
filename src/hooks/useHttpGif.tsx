import { useEffect, useState } from "react";
import { getHttpGif } from "../helpers/getHttpGif";
import { dataHttpGif } from "../interfaces/dataHttpGif";

export const useHttpGif = (categoria: string) => {
    
    const [imagenes, setImagenes] = useState<dataHttpGif>({
        imagenes: [],
        loading: true
    });
    
    useEffect(() => 
    {
        getHttpGif(categoria || 'programador')
            .then(data => {
                setImagenes({
                    imagenes: data,
                    loading: false
                });
            });
    }, [categoria]);

    return imagenes;
}