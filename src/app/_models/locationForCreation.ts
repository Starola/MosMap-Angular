import { NumberSymbol } from '@angular/common';

export interface LocationForCreation {
    LocationName: string;
    LocationDescription: string;
    Latitude: string;
    Longitude: string;
    Address: string;
    CategoryId: number;
    SubCategoryIds: number[];
}
