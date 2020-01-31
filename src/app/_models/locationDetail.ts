import { Photo } from './Photo';

export interface LocationDetail {
    id: number;
    LocationName: string;
    LocationDescription: string;
    Address: string;
    photoUrl?: string;
    photos?: Photo[];
}
