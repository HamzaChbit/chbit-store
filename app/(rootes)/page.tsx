import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  
  const products = await getProducts({isFeatured:true})
  const billboard = await getBillboard('fe67680f-07fe-401b-974a-e2ac87438bff')
  return (
    <Container>
      <div  className='space-y-10 pb-10' >
        <Billboard     data={billboard}/>

      
      <div className='flex flex-col gap-y-8 sm:px-6 lg:px-8 ' >
        <ProductList  title='Featured Product ' items={products}  />
       
        </div>
      </div>
    </Container>
  )
}

export default HomePage