import { LocalDbConfig } from "./sda-be-mock.module";

export const dbConfig: LocalDbConfig[] = [
    {
        table:'Category',
        columns:['name']
    },
    {
    table:'Product',
    columns:['categoryId', 'name', 'image', 'description', 'price']
},
{
    table:'Rating',
    columns:['productId', 'rating']
}];
