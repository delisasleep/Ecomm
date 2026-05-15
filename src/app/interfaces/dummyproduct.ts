export interface Dummyproduct {
    "products": DummyproductItem[],
    "total": 194,
    "skip": 0,
    "limit": 30
}

export interface DummyproductItem {
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "images": string[],
    "thumbnail": string,
    "isDeleted"?: boolean,
    "deletedOn"?: string
}
