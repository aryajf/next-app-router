import { NextRequest, NextResponse } from "next/server";

const products = [{
  id: 1,
  title: 'Sepatu Baru',
  price: 10000,
  image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13ddc46d-b109-46dd-a99b-3f6a293fdf24/air-force-1-07-lv8-shoes-lPdFPQ.png'
},{
  id: 2,
  title: 'Sepatu Bauuu',
  price: 25000,
  image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49d6a0ba-d3c1-4d5f-b93f-b09af0c662ef/air-force-1-07-shoes-587rld.png'
},{
  id: 3,
  title: 'Sepatu Wow',
  price: 75000,
  image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c109d6c-ecb0-4af0-a8c6-ad77838b8051/air-force-1-wild-shoes-FCjQ2C.png'
}]

export async function GET(request: NextRequest){
  const {searchParams} = new URL(request.url)
  const id = searchParams.get('id')
  
  if(id){
    const detailProducts = products.find(product => product.id == Number(id))
    if(detailProducts){
      return NextResponse.json({status:200, message:'Success', products:detailProducts})
    }
    return NextResponse.json({status:404, message:'Not Found', products:{}})
  }

  return NextResponse.json({status:200, message:'Success', products:products})
}