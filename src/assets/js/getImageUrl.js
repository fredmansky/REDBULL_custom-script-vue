const getImageUrl = (url, size = '400/400') => {
    const imageSize = `0001/0/${size}`;
    return `https://image.redbull.com/${url.replace('{op}', imageSize)}`;
};

export default getImageUrl;
