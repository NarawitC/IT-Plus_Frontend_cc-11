export const calculateDeliveryFromDistance = (distance) => {
  const pricePerMetre = 0.02;
  if (distance.split(' ')[1] === 'km') {
    distance = distance.split(' ')[0] * 1000 * pricePerMetre;
  } else {
    return distance.split(' ')[0] * 1000 * pricePerMetre;
  }
};
