export const getUniqueDistricts = (serviceCenters = []) => {
  const uniqueDistricts = new Set();

  serviceCenters.forEach(({ district }) => {
    if (district) uniqueDistricts.add(district.trim());
  });

  return [...uniqueDistricts];
};

export const filterDistricts = (serviceCenters = [], searchTerm = "") => {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return getUniqueDistricts(serviceCenters);
  }

  return getUniqueDistricts(serviceCenters).filter((district) =>
    district.toLowerCase().includes(normalizedSearch),
  );
};
