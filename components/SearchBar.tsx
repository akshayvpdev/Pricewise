"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent } from "react";
import { useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const SearchBar = () => {
  const [searchPrmpt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrmpt);
    if (!isValidLink) return alert("please provide a valid Amazon link");

    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(searchPrmpt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-gap gap-14 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="searchbar-input"
        className="searchbar-input"
        value={searchPrmpt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrmpt === ""}>
        {isLoading ? "searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
