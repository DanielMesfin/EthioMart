export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    categoryId: string
  }
  
  export interface Category {
    id: string
    name: string
  }
  
  export interface CartItem {
    product: Product
    quantity: number
  }