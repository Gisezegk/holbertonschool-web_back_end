export default function cleanSet(aSet, startString) {
  if (!startString || typeof startString !== 'string') return '';
  
  const filterValues = Array.from(aSet)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.substring(startString.length));
  
  return filterValues.join('-');
}
