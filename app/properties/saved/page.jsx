export const dynamic = 'force-dynamic'

"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { ClipLoader } from "react-spinners";

const SavedPropertiesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [savedProperties, setSavedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      if (!session?.user?.id) return;

      try {
        setLoading(true);

        const response = await fetch("/api/bookmarks");
        if (response.ok) {
          const data = await response.json();
          setSavedProperties(data);
        } else {
          console.error("Failed to fetch saved properties");
        }
      } catch (error) {
        console.error("Error fetching saved properties:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) {
      fetchSavedProperties();
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3b82f6" size={150} />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="container m-auto py-24 px-6">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Saved Properties</h1>
          <p className="text-gray-600 mb-6">
            Properties you've bookmarked for later viewing
          </p>
        </div>

        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          {loading ? (
            <div className="flex justify-center py-12">
              <ClipLoader color="#3b82f6" size={50} />
            </div>
          ) : savedProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                You haven't saved any properties yet.
              </p>
              <a
                href="/properties"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Browse Properties
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
