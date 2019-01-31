const getLocation = (data, includes) => {
    const locationId = data.relationships.locations.data[0].id;
    const location = (includes) => {
      return includes.id === locationId;
    };

    return includes.find(location).attributes.location;
};

export default getLocation;
