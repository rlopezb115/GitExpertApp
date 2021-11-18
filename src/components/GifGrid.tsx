import PropTypes from 'prop-types';
import GifElement from './GifElement';
import { useHttpGif } from '../hooks/useHttpGif';

interface props {
    categoria?: string
}

const GifGrid = ( { categoria } : props) => 
{
    const { imagenes, loading } = useHttpGif(categoria || 'tecnología');

    return (
        <div>
            <h3>{ categoria }</h3>
            { loading && <p>cargando...</p> }
            <div className="grid">
                {
                    imagenes.map(imagen => (
                        <GifElement 
                            key={imagen.id}
                            id={imagen.id}
                            title={imagen.title} 
                            url={imagen.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid;