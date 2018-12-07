import logo from 'assets/imagen.png';

export const makeImage = () => {
    const image = document.createElement('img');
    image.title='Big Image';
    image.alt = 'Big Image';
    image.src = logo;
    return image;
};

export default {
    makeImage
};
