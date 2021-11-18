import { elementGif } from "../interfaces/elementGif";

export const getHttpGif = async (
    categoria: string
): Promise<elementGif[]> => {
    
    console.log("Inicia getHttpGif");

    const imagenesGif: elementGif[] = [];

    console.log("Petición HTTP GET");
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=kWPkAX8OZD2IuL2R9CqqjYETGq8QyLp3&limit=15&q='+ encodeURI(categoria);
    console.log(url);

    console.log("Response HTTP GET");
    const response = await fetch(url)
    
    console.log("JSON HTTP GET");
    const { data } = await response.json();

    console.log("Inicia Iteración");
    data.forEach((e: any) => {
        imagenesGif.push({
            id: e.id,
            title: e.title,
            url: e.images?.downsized_medium.url
        });
        console.log("Siguiente Iteración");
    });
    console.log("Termina Iteración");
    console.log("Termina getHttpGif");
    return imagenesGif;
};