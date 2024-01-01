import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const {searchParams} = new URL(request.url)
  const id = searchParams.get('id')
  
  if(id){
    const detailProducts = await retrieveDataById('products', id)
    if(detailProducts){
      return NextResponse.json({status:200, message:'Success', products:detailProducts})
    }
    return NextResponse.json({status:404, message:'Not Found', products:{}})
  }

  const products = await retrieveData('products')

  return NextResponse.json({status:200, message:'Success', products})
}