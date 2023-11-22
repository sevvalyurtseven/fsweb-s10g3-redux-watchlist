//action typelarimiz:

export const NEXT_MOVIE = "Siradaki Film";
export const PREV_MOVIE = "Onceki Film";
export const FIRST_MOVIE = "Ilk Film";
export const ADD_FAVORITE = "Favorilere Ekle"; 
export const REMOVE_FAVORITE = "Favorilerden Cikar";

//action creater'larimiz (fonksiyonlarda bize action objesi olustururlar)

export const nextMovie = () => {
    return {type: NEXT_MOVIE};
};
export const prevMovie = () => {
    return {type: PREV_MOVIE};
};
export const firstMovie = () => {
    return {type: FIRST_MOVIE};
};
export const addFavorite = (movie) => {
    return {type: ADD_FAVORITE, payload: movie};
};
export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id};
};