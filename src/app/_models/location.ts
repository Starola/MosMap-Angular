import { Photo } from './Photo';

export interface Location {
    Id: number;
    LocationName: string;
    LocationDescription: string;
    Address: string;
    photoUrl?: string;
    photos?: Photo[];
}
