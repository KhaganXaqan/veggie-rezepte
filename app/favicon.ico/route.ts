import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  // Path to the favicon file in the public directory
  const faviconPath = path.join(process.cwd(), 'public', 'images', 'logo', 'favicon.ico');
  
  try {
    // Read the favicon file
    const faviconBuffer = fs.readFileSync(faviconPath);
    
    // Return the favicon with appropriate headers
    return new NextResponse(faviconBuffer, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 404 });
  }
}

export function generateStaticParams() {
  return [];
}
