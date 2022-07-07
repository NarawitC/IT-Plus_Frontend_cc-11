import axios from 'axios';
import { GOOGLE_MAP_API_KEY } from '../../config/constants';
export const GoogleMapGetDistance = async ({ prams }) => {
  params.key = GOOGLE_MAP_API_KEY;
  return await axios.get(
    'https://maps.googleapis.com/maps/api/distancematrix/json',
    { params }
  );
};
