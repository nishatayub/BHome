export const dynamic = 'force-dynamic'

"use client";

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
    images: "",
    nightly: "",
    weekly: "",
    monthly: "",
    seller_name: "",
    seller_email: "",
    seller_phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.id) {
      alert("You must be signed in to add a property.");
      return;
    }

    setLoading(true);

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
      images: form.images ? form.images.split(",").map((s) => s.trim()) : [],
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

    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        // Navigate to the newly created property page if route exists
        if (data && data._id) {
          router.push(`/properties/${data._id}`);
        } else {
          alert("Property created");
        }
      } else {
        const text = await res.text();
        alert("Failed to create property: " + text);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
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
            <label className="block">Images (comma separated URLs)</label>
            <input name="images" value={form.images} onChange={handleChange} className="w-full border p-2" />
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
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
              {loading ? "Saving..." : "Create Property"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddPropertiesPage;
