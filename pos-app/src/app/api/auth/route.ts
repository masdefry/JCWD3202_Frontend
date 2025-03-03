import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json(); // Mengambil Data yang di kirim Melalui Body Request
    
    // Find User by Email & Password
    const findUser = await Backendless.Data.of('User').find({
        where: `email = '${email}' AND password = '${password}'`,
    });
    
    // findUser: [] => User Not Found
    // findUser: [{}] => User Found 

    if(findUser.length === 0) {
      return NextResponse.json({ message: 'Authentication Failed!' }, { status: 404 });
    }else{
        return NextResponse.json({ message: 'Authentication Success!' }, { status: 200 });
    }
  } catch (error) {
      console.error(error);
      console.log('>>>')
  }
}

// fetch('urlAPI', 'objectData', 'headersConfig');
// axios.get('urlAPI', 'headersConfig');
// axios.post('urlAPI', 'objectData', 'headersConfig');
// axios.put('urlAPI', 'objectData', 'headersConfig');
// axios.delete('urlAPI', 'headersConfig');
