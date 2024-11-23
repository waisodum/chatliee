"use client";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
const backend = process.env.NEXT_PUBLIC_API;
const SearchModal = ({ search, users, setusers }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setloading] = useState(false);
  const [added, setAdded] = useState([]);
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!searchQuery.trim()) setSearchResults([]);
  }, [searchQuery]);

  const searchUserName = async () => {
    if (!searchQuery.trim()) return;
    const token = localStorage.getItem("Token");
    if (!token) {
      alert("Authentication token is missing");
      return;
    }
    setloading(true);
    try {
      const { data } = await axios.get(
        `${backend}/search/?search=${searchQuery}`,
        { headers: { Authorization: token } }
      );
      setSearchResults(data);
      setloading(false);
    } catch (err) {
      setloading(false);
      alert("Internal Server Error");
      console.log(err);
      closeModal();
    }
  };

  const closeModal = () => {
    search(false);
    setSearchQuery("");
    document.body.style.overflow = "unset";
  };
  async function handleAdd(res) {
    const token = localStorage.getItem("Token");
    if (!token) {
      alert("Authentication token is missing");

      return;
    }
    console.log(res);
    setAdded((prev) => [...prev, res._id]);
    try {
      const { data } = await axios.post(
        `${backend}/users/add`,
        {
          _id: res._id,
        },
        { headers: { Authorization: token } }
      );
      setusers((prev) => [...prev, res]);
    } catch (err) {
      console.log(err);
    }
    // console.log(added);
  }
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16 px-4"
        onClick={handleClickOutside}
        role="dialog"
        aria-modal="true"
        aria-label="Search modal"
      >
        <div
          ref={modalRef}
          className="w-full max-w-2xl bg-white rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="flex items-center p-4 border-b border-gray-200">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="w-full bg-transparent border-none focus:outline-none text-lg"
                aria-label="Search input"
              />
              {!loading && (
                <FaSearch
                  className="text-gray-400 mr-3 cursor-pointer"
                  onClick={searchUserName}
                />
              )}
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close search"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            <div
              className="max-h-[60vh] overflow-y-auto p-4"
              aria-live="polite"
            >
              {searchResults.map((result) => (
                <div
                  key={result._id}
                  className="p-4 hover:bg-gray-50  flex justify-between rounded-lg cursor-pointer transition-colors duration-200 mb-2"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {result.username}
                  </h3>
                  {!added.some((id) => id === result._id) &&
                    !users.some((id) => id._id == result._id) && (
                      <div
                        className="rounded-sm hover:bg-teal-100 border-2 p-2"
                        onClick={() => {
                          handleAdd(result);
                        }}
                      >
                        Add friends
                      </div>
                    )}
                </div>
              ))}
              {searchQuery && searchResults.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  &quot;Click on Search icon to Search {searchQuery}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
