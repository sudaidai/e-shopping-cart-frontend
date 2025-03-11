'use client'

import React, {useEffect, useState} from 'react'
import Layout from '@/components/layouts/DefaultLayout'
import ProductItem from '@/components/ProductItem'
import {ArrowLeft} from 'lucide-react'
import {useRouter} from 'next/navigation'
import {apiProduct} from '@/services/api'

const mockProducts: Array<IProduct> = [
  {
    id: '1',
    name: 'Product 1',
    price: 1000,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet?',
    image: [''],
  },
  {
    id: '2',
    name: 'Product 2',
    price: 1500,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium iusto hic perferendis quaerat odio ratione ipsa, provident inventore aliquam, rem ea asperiores. Sapiente eveniet quod consectetur cum illum odit.
      Illo debitis minus assumenda dolorum sed harum porro error possimus nam aliquam, quam pariatur beatae omnis consequuntur saepe sint, rem officiis quod repellat nemo doloribus distinctio incidunt aperiam eveniet. Dolorem!
      Recusandae quibusdam nulla quas, ipsa obcaecati a distinctio doloribus culpa placeat neque illum, aut quaerat temporibus. Quos illum dolore impedit alias dolorum, similique esse earum optio odio soluta repellendus. Quasi.`,
    image: [''],
  },
  {
    id: '3',
    name: 'Product 3',
    price: 2000,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sint molestias. Neque voluptatibus magni eveniet consectetur? Aperiam, aliquam saepe sequi, amet distinctio provident itaque, facilis temporibus voluptates ex repellendus pariatur?
      Odio odit hic facilis deleniti quia repellendus sequi voluptates fugiat dicta quae. Placeat nemo nulla magnam omnis, eveniet dolore, numquam corrupti, aliquam dolores adipisci neque. Modi enim molestiae ducimus nesciunt.`,
    image: [''],
  },
  {
    id: '4',
    name: 'Product 4',
    price: 100.5,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla neque dolor, excepturi fugiat libero?`,
    image: [''],
  },
  {
    id: '5',
    name: 'Product 5',
    price: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor animi laudantium culpa possimus omnis distinctio eveniet.',
    image: [''],
  },
  {
    id: '6',
    name: 'Product 6',
    price: 30,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis placeat mollitia vero incidunt fugit. Nisi suscipit, ipsa, quisquam enim qui error dolorum laudantium consequuntur hic veritatis minima. Itaque, cum architecto.
      Id ut, magnam dolor cupiditate doloremque unde omnis amet soluta consequuntur iusto optio tempore provident quae corrupti veritatis laboriosam! Officiis architecto dignissimos quis libero quae nam dolorum consectetur dolorem labore!`,
    image: [''],
  },
]

const Product: React.FC = () => {
  const router = useRouter()

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    console.log('999999')
    // fetchProducts()
  }, [])

  fetchProducts()

  async function fetchProducts() {
    try {
      const res = await apiProduct()
      console.log('res : ', res)
    } catch (error) {
      console.log('error : ', error)
    }
  }

  console.log('products : ', products)

  function backToMainPageHandler() {
    router.push('/main')
  }

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div
          className="text-xs font-bold mb-4 flex justify-start items-center gap-4 hover:text-primary cursor-pointer"
          onClick={backToMainPageHandler}
        >
          <ArrowLeft />
          <div>Product Category Page</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.length ? (
            products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <div>No Products to view.</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Product
