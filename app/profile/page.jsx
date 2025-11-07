'use client'

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { ClipLoader } from "react-spinners";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("properties"); // 'properties' or 'saved'
  const [properties, setProperties] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.id) return;

      try {
        setLoading(true);

        // Fetch user's properties
        const propsRes = await fetch(`/api/properties/user/${session.user.id}`);
        if (propsRes.ok) {
          const propsData = await propsRes.json();
          setProperties(propsData);
        }

        // Fetch saved/bookmarked properties
        const savedRes = await fetch(`/api/bookmarks`);
        if (savedRes.ok) {
          const savedData = await savedRes.json();
          setSavedProperties(savedData);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) {
      fetchData();
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
    <section className="bg-blue-50">
      <div className="container m-auto py-24 px-6">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex items-center gap-4 mb-6">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="h-16 w-16 rounded-full"
              />
            )}
            <div>
              <p className="text-xl font-bold">{session.user.name}</p>
              <p className="text-gray-500">{session.user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex gap-4 mb-6 border-b">
            <button
              onClick={() => setActiveTab("properties")}
              className={`pb-2 px-4 ${
                activeTab === "properties"
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              Your Properties
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-2 px-4 ${
                activeTab === "saved"
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              Saved Properties
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <ClipLoader color="#3b82f6" size={50} />
            </div>
          ) : (
            <>
              {activeTab === "properties" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Your Properties</h2>
                  {properties.length === 0 ? (
                    <p className="text-gray-500">You haven't added any properties yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {properties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "saved" && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Saved Properties</h2>
                  {savedProperties.length === 0 ? (
                    <p className="text-gray-500">You haven't saved any properties yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedProperties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
