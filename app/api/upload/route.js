import { NextResponse } from 'next/server';
import cloudinary from '@/config/cloudinary';
import { auth } from '@/auth';

export async function POST(request) {
  try {
    const session = await auth();
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const files = formData.getAll('images');

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No images provided' },
        { status: 400 }
      );
    }

    const uploadPromises = files.map(async (file) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'bhome-properties',
            resource_type: 'image',
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );

        uploadStream.end(buffer);
      });
    });

    const imageUrls = await Promise.all(uploadPromises);

    return NextResponse.json(
      { 
        success: true,
        imageUrls 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload images' },
      { status: 500 }
    );
  }
}
