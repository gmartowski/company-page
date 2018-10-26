import React from 'react';

interface IImageProps {
    src: string;
    alt: string;
    title: string;
}

export const Image: React.SFC<IImageProps> = props => {
    const {src, alt, title} = props;
    return (
        <img src={src} alt={alt} title={title} className='image' />
    );
};
