'use client'

export const dynamic = 'force-dynamic'

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddPropertiesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    beds: 1,
    baths: 1,
    square_feet: 0,
    amenities: "",
    nightly: "",
    weekly: "",
    monthly: "",
    seller_name: "",
    seller_email: "",
    seller_phone: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Add new files to existing images instead of replacing
    const newImages = [...images, ...files];
    setImages(newImages);

    // Create preview URLs for all images
    const newPreviews = newImages.map(file => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
    
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.id) {
      alert("You must be signed in to add a property.");
      return;
    }

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setLoading(true);

    try {
      // First, upload images to Cloudinary
      setUploadingImages(true);
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('images', image);
      });

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload images');
      }

      const { imageUrls } = await uploadRes.json();
      setUploadingImages(false);

      // Then, create the property with the image URLs
      const payload = {
        owner: session.user.id,
        name: form.name,
        type: form.type,
        description: form.description,
        location: {
          street: form.street,
          city: form.city,
          state: form.state,
          zipcode: form.zipcode,
        },
        beds: Number(form.beds),
        baths: Number(form.baths),
        square_feet: Number(form.square_feet),
        amenities: form.amenities ? form.amenities.split(",").map((s) => s.trim()) : [],
        images: imageUrls,
        rates: {
          nightly: form.nightly ? Number(form.nightly) : undefined,
          weekly: form.weekly ? Number(form.weekly) : undefined,
          monthly: form.monthly ? Number(form.monthly) : undefined,
        },
        seller_info: {
          name: form.seller_name,
          email: form.seller_email,
          phone: form.seller_phone,
        },
      };

      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Property created successfully!");
        if (data && data._id) {
          router.push(`/properties/${data._id}`);
        } else {
          router.push("/properties");
        }
      } else {
        const text = await res.text();
        alert("Failed to create property: " + text);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
      setUploadingImages(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>

      {status === "loading" ? (
        <p>Checking session...</p>
      ) : !session ? (
        <p>Please sign in to add a property.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full border p-2" />
          </div>

          <div>
            <label className="block">Type</label>
            <input name="type" value={form.type} onChange={handleChange} required className="w-full border p-2" />
          </div>

          <div>
            <label className="block">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">Street</label>
              <input name="street" value={form.street} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">State</label>
              <input name="state" value={form.state} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Zipcode</label>
              <input name="zipcode" value={form.zipcode} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block">Beds</label>
              <input name="beds" type="number" value={form.beds} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Baths</label>
              <input name="baths" type="number" value={form.baths} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Square feet</label>
              <input name="square_feet" type="number" value={form.square_feet} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <div>
            <label className="block">Amenities (comma separated)</label>
            <input name="amenities" value={form.amenities} onChange={handleChange} className="w-full border p-2" />
          </div>

          <div>
            <label className="block font-semibold mb-2">Property Images *</label>
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleImageChange}
              className="w-full border p-2 rounded"
            />
            <p className="text-sm text-gray-500 mt-1">
              Select multiple images at once, or click again to add more. Currently selected: {images.length} image{images.length !== 1 ? 's' : ''}
            </p>
            
            {imagePreviews.length > 0 && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-700">
                    {imagePreviews.length} image{imagePreviews.length !== 1 ? 's' : ''} ready to upload
                  </p>
                  {imagePreviews.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setImages([]);
                        setImagePreviews([]);
                        const fileInput = document.querySelector('input[type="file"]');
                        if (fileInput) fileInput.value = '';
                      }}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={preview} 
                        alt={`Preview ${index + 1}`} 
                        className="w-full h-32 object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block">Nightly</label>
              <input name="nightly" type="number" value={form.nightly} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Weekly</label>
              <input name="weekly" type="number" value={form.weekly} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Monthly</label>
              <input name="monthly" type="number" value={form.monthly} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <h2 className="text-lg font-semibold">Seller Info</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block">Name</label>
              <input name="seller_name" value={form.seller_name} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Email</label>
              <input name="seller_email" value={form.seller_email} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div>
              <label className="block">Phone</label>
              <input name="seller_phone" value={form.seller_phone} onChange={handleChange} className="w-full border p-2" />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              disabled={loading || uploadingImages} 
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {uploadingImages ? "Uploading Images..." : loading ? "Creating Property..." : "Create Property"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddPropertiesPage;
