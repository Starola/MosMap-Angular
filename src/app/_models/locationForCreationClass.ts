import { LocationForCreation } from './locationForCreation';

export class LocationForCreationClass implements LocationForCreation{
    LocationName: string;    LocationDescription: string;
    Latitude: string;
    Longitude: string;
    Address: string;
    CategoryId: number;
    SubCategoryIds: number[];

}
