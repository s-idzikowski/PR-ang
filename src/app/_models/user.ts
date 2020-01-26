import { Photo } from './photo';

export interface User {
    /** Podstawowe informacje */
    id: number;
    username: string;
    gender: string;
    age: number;
    zodiacSign: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    /** Zakladka info */
    growth: string;
    eyeColor: string;
    hairColor: string;
    martialStatus: string;
    education: string;
    profession: string;
    children: string;
    languages: string;
    /** Zakladka o mnie */
    motto: string;
    description: string;
    personality: string;
    lookingFor: string;
    /** Zakladka pasje i zainteresowania */
    interests: string;
    freeTime: string;
    sport: string;
    movies: string;
    music: string;
    /** Zakladka preferencje */
    iLike: string;
    idoNotLike: string;
    makesMeLaugh: string;
    itFeelsBestIn: string;
    friendeWouldDescribeMe: string;
    /** Zakladka zdjecia */
    photos: Photo[];
    photoUrl: string;
}
