'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories, getProductsByCategory } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Product, Category } from '@/types'
import { ShoppingCart } from 'lucide-react'

export default function Store() {
  const [categories, setCategories] = useState<Category[]>([])
  const [productsByCategory, setProductsByCategory] = useState<{ category: Category; products: Product[] }[]>([])
  const [cart, setCart] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getCategories()
      setCategories(fetchedCategories)

      const fetchedProductsByCategory = await Promise.all(
        fetchedCategories.map(async (category) => ({
          category,
          products: await getProductsByCategory(category.id)
        }))
      )
      setProductsByCategory(fetchedProductsByCategory)
    }

    fetchData()

    // Load cart from local storage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }))
  }

  const totalItemsInCart = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Store</h1>
        <div className="relative">
          <Link href="/cart">
            <Button variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
              {totalItemsInCart > 0 && (
                <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs">
                  {totalItemsInCart}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue={categories[0]?.id} className="w-full">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {productsByCategory.map(({ category, products }) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline">
                      <Link href={`/product/${product.id}`}>View Details</Link>
                    </Button>
                    <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}