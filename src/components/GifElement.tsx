import { elementGif } from '../interfaces/elementGif';

const GifElement = ({title, url}: elementGif) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <h3 className="card__title">{ title }</h3>
            <img src={ url } alt={ title } className="card_imagen" />
        </div>
    )
}

export default GifElement;