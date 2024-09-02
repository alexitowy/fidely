export interface DataCard{

    icon: string,
    title: string,
    currentCountService: string,
    maxCountService: string,
    award: string,
    favorite: boolean,
    categoryName: string,
    categoryColor: string,
    stamps: Stamps
}

export interface Stamps{
    limit: string,
    complete: string,
    imgComplete:string,
    imgDefault:string
}
