import { NextRequest } from 'next/server';
import Backendless from '@/lib/backendless';

export async function GET(req: NextRequest) {
  try {
    const findProducts = await Backendless.Data.of('Product').find();
    console.log(findProducts);
  } catch (error) {
    console.error(error);
  }
}
