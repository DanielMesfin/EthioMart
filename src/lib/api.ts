import { Product, Category } from '@/types/index'

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'books', name: 'Books' },
]

const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    description: 'Latest model smartphone with advanced features',
    price: 699.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'electronics',
  },
  {
    id: '2',
    name: 'Laptop',
    description: 'High-performance laptop for work and gaming',
    price: 1299.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'electronics',
  },
  {
    id: '3',
    name: 'T-shirt',
    description: 'Comfortable cotton t-shirt',
    price: 19.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'clothing',
  },
  {
    id: '4',
    name: 'Jeans',
    description: 'Classic blue jeans',
    price: 49.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'clothing',
  },
  {
    id: '5',
    name: 'Novel',
    description: 'Bestselling fiction novel',
    price: 14.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'books',
  },
  {
    id: '6',
    name: 'Cookbook',
    description: 'Collection of gourmet recipes',
    price: 24.99,
    image: '/placeholder.svg?height=300&width=300',
    categoryId: 'books',
  },
]

export async function getCategories(): Promise<Category[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return categories
}

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return products.find(p => p.id === id)
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  return products.filter(p => p.categoryId === categoryId)
}