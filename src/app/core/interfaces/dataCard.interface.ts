export interface DataCard{

    id: string,
    icon: string,
    title: string,
    subtitle: string,
    currentCountService: string,
    maxCountService: string,
    award: string,
    favorite: boolean,
    categoryName: string,
    categoryColor: string,
    stamps: Stamps,
    addCard?: boolean
}

export interface Stamps{
    limit: string,
    complete: string,
    imgComplete:string,
    imgDefault:string
}
