'use client'

export const dynamic = 'force-dynamic'

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { FaEnvelope, FaEnvelopeOpen, FaUser, FaClock, FaTrash } from "react-icons/fa";

const MessagesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!session?.user?.id) return;

      try {
        setLoading(true);
        const response = await fetch("/api/messages");
        
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) {
      fetchMessages();
    }
  }, [session]);

  const handleMarkAsRead = async (messageId) => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });

      if (response.ok) {
        setMessages(messages.map(msg => 
          msg._id === messageId ? { ...msg, read: true } : msg
        ));
      }
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const handleDeleteMessage = async (messageId) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessages(messages.filter(msg => msg._id !== messageId));
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

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
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
            <h1 className="text-3xl font-bold flex items-center">
              <FaEnvelope className="mr-3" />
              Messages
            </h1>
            <p className="mt-2 opacity-90">
              {messages.filter(m => !m.read).length} unread messages
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <ClipLoader color="#3b82f6" size={50} />
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-16">
              <FaEnvelopeOpen className="mx-auto text-6xl text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">No messages yet</p>
              <p className="text-gray-400 mt-2">
                When property owners or renters contact you, their messages will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-gray-200">
              {/* Message List */}
              <div className="lg:col-span-1 overflow-y-auto max-h-[600px]">
                {messages.map((message) => (
                  <div
                    key={message._id}
                    onClick={() => {
                      setSelectedMessage(message);
                      if (!message.read) {
                        handleMarkAsRead(message._id);
                      }
                    }}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedMessage?._id === message._id ? 'bg-blue-50' : ''
                    } ${!message.read ? 'bg-blue-50/50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <FaUser className="text-gray-400 mr-2" />
                        <span className={`font-semibold ${!message.read ? 'text-blue-600' : 'text-gray-800'}`}>
                          {message.sender?.name || message.name || 'Anonymous'}
                        </span>
                      </div>
                      {!message.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1 truncate">
                      {message.subject || 'No subject'}
                    </p>
                    <p className="text-xs text-gray-400 flex items-center">
                      <FaClock className="mr-1" />
                      {formatDate(message.createdAt)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Detail */}
              <div className="lg:col-span-2 p-6">
                {selectedMessage ? (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {selectedMessage.subject || 'No subject'}
                        </h2>
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaUser className="mr-2" />
                          <span className="font-semibold">
                            {selectedMessage.sender?.name || selectedMessage.name || 'Anonymous'}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{selectedMessage.email}</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {formatDate(selectedMessage.createdAt)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteMessage(selectedMessage._id)}
                        className="text-red-500 hover:text-red-600 p-2"
                        title="Delete message"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {selectedMessage.body || selectedMessage.message}
                      </p>
                    </div>

                    {selectedMessage.phone && (
                      <div className="mb-4">
                        <span className="text-gray-600">Phone:</span>{' '}
                        <a href={`tel:${selectedMessage.phone}`} className="text-blue-500 hover:underline">
                          {selectedMessage.phone}
                        </a>
                      </div>
                    )}

                    {selectedMessage.property && (
                      <div className="border-t pt-4">
                        <p className="text-gray-600 text-sm mb-2">Regarding property:</p>
                        <a 
                          href={`/properties/${selectedMessage.property._id || selectedMessage.property}`}
                          className="text-blue-500 hover:underline font-semibold"
                        >
                          {selectedMessage.property.name || 'View Property'}
                        </a>
                      </div>
                    )}

                    <div className="mt-6">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your message'}`}
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        Reply via Email
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="text-center">
                      <FaEnvelopeOpen className="mx-auto text-6xl mb-4" />
                      <p>Select a message to view</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
