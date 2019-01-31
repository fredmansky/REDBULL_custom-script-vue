const getImageUrl = (data, includes, size = '400/400') => {
    const imageId = data.relationships.featuredMedia.data[0].id;

    const image = (includes) => {
      return includes.id === imageId;
    };

    const imageUrl = includes.find(image).attributes.imageEssence.attributes.templateURL;
    const imageSize = `0001/0/${size}`;
    return `https://image.redbull.com/${imageUrl.replace('{op}', imageSize)}`;
};

export default getImageUrl;
