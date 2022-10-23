import  {ICar} from "../models";

export const Cars: ICar[] = [
    {
        UUID: '123e4567-e89b-12d3-a456-426655440000',
        Image: '/resources/nissan_skyline.webp',
        Name: 'Nissan Skyline X (R34)',
        SalePrice: 4200000,
        Year: 1998,
        EngineType: 'V6',
        EngineVolume: 2.5,
        Power: 280,
        Gearbox: 'Mechanic',
        TypeOfDrive: 'Rear',
        Color: 'Blue',
        Mileage: 35000,
        Wheel: 'Right',
        Description: 'Продаю не спеша, проект строил для себя. Обмен на равноценный автомобиль.'
    },
    {
        UUID: '123e4567-e89b-12d3-a456-426655440000',
        Image: '/resources/supra.webp',
        Name: 'Toyota Supra III (A70)',
        SalePrice: 999999,
        Year: 1990,
        EngineType: 'V6',
        EngineVolume: 2.5,
        Power: 280,
        Gearbox: 'Mechanic',
        TypeOfDrive: 'Rear',
        Color: 'Blue',
        Mileage: 35000,
        Wheel: 'Right',
        Description: 'Широкий кузов. Шире всех широких. Крепкий, ровный и без гнили.'
    },
]