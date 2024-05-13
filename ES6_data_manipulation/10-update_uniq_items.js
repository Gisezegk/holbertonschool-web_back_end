export default function updateUniqueItems(mapToUpdate) {
  if (!(mapToUpdate instanceof Map)) {
    throw new Error('Cannot process');
  }
  mapToUpdate.forEach((value, key) => {
    if (value === 1) {
      mapToUpdate.set(key, 100);
    }
  });
}
