# Cloudinary Image Upload Setup Guide

## 1. Create a Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Click "Sign Up" and create a free account
3. Verify your email

## 2. Get Your Cloudinary Credentials

1. Log in to your Cloudinary dashboard
2. You'll see your account details on the main page:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

## 3. Add Credentials to Your Project

### For Local Development:

Update your `.env` file with your Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

### For Production (Vercel):

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

| Variable Name | Value |
|--------------|-------|
| `CLOUDINARY_CLOUD_NAME` | Your cloud name from Cloudinary |
| `CLOUDINARY_API_KEY` | Your API key from Cloudinary |
| `CLOUDINARY_API_SECRET` | Your API secret from Cloudinary |

5. Click **Save**
6. Redeploy your application

## 4. How It Works

### Adding a Property with Images:

1. Sign in to your account
2. Go to **Add Property** page
3. Fill in the property details
4. Click **Choose Files** under "Property Images"
5. Select one or more images (JPG, PNG, etc.)
6. Preview the images before uploading
7. Click **Create Property**
8. Images will be uploaded to Cloudinary automatically
9. Property will be saved with Cloudinary URLs

### Viewing Properties:

- All property images are now loaded from Cloudinary
- Images are optimized and served via Cloudinary CDN
- Fast loading and responsive

## 5. Features

✅ Multiple image upload support
✅ Image preview before upload
✅ Remove images before submission
✅ Images stored in Cloudinary (not in your database)
✅ Automatic image optimization
✅ CDN delivery for fast loading
✅ Secure upload with authentication

## 6. Folder Structure

Images are stored in Cloudinary under the folder: `bhome-properties/`

## Troubleshooting

**Error: "Failed to upload images"**
- Check that your Cloudinary credentials are correct
- Verify you're signed in
- Check file size (Cloudinary free tier has limits)

**Images not displaying:**
- Verify Cloudinary credentials are set
- Check browser console for errors
- Ensure `res.cloudinary.com` is in `next.config.mjs` remote patterns
