import { database } from '../firebase/firebase';
import { convertArray } from './converters';

const lessonsRef = database.ref('lessons');

export const getLessons = () => lessonsRef.once('value').then(convertArray);
