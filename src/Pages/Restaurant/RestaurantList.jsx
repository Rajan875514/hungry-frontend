
















import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllRestaurants,
    searchRestaurant,
} from "../../Redux/Slices/restaurantSlice.js";
import RestaurantCard from "../../Components/Cards/RestaurantCard.jsx";
import RestaurantListShimmer from "../Shimmer/RestaurantListShimmer.jsx";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const RestaurantList = () => {
    const dispatch = useDispatch();
    const { restaurantData, filteredRestaurant } = useSelector(
        (state) => state?.restaurant
    );
    const { role } = useSelector((state) => state.auth);

    const [searchQuery, setSearchQuery] = useState("");
    const [isFilteredRestaurant, setIsFilteredRestaurant] = useState(false);

    async function loadAllRestaurants() {
        if (!restaurantData || restaurantData.length === 0) {
            try {
                await dispatch(getAllRestaurants());
                console.log("Loaded restaurantData:", restaurantData);
            } catch (error) {
                console.error("Failed to load restaurants:", error);
            }
        }
    }

    function handleSearch(searchText) {
        setSearchQuery(searchText);
        const searchTerm = searchText.trim().toLowerCase();
        console.log("Search term:", searchTerm);
        dispatch(searchRestaurant(searchTerm));
        setIsFilteredRestaurant(!!searchTerm);
    }

    const clearSearch = () => {
        setSearchQuery("");
        setIsFilteredRestaurant(false);
        dispatch(searchRestaurant(""));
    };

    useEffect(() => {
        loadAllRestaurants();
    }, [dispatch, restaurantData]);

    return (
        
        <div className="py-12">
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes scaleIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }

                    .animate-fadeIn {
                        animation: fadeIn 0.8s ease-out;
                    }

                    .animate-slideUp {
                        animation: slideUp 0.6s ease-out;
                    }

                    .animate-scaleIn {
                        animation: scaleIn 0.5s ease-out forwards;
                    }

                    .restaurant-card-animation {
                        animation: scaleIn 0.5s ease-out forwards;
                    }

                    .banner-overlay-animation {
                        animation: fadeIn 1s ease-out;
                    }

                    .search-bar-animation {
                        animation: fadeIn 0.6s ease-out;
                    }

                    .search-input-container {
                        position: relative;
                        width: 100%;
                        transition: box-shadow 0.3s ease-in-out;
                    }

                    .search-input-container input {
                        padding: 12px 40px 12px 60px; /* Increased left padding significantly */
                        background-color: rgba(255, 255, 255, 0.15);
                        border: 1px solid rgba(255, 255, 255, 0.25);
                        color: #e2e8f0;
                        font-size: 1rem;
                        transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out;
                    }

                    .search-input-container input::placeholder {
                        color: rgba(226, 232, 240, 0.6);
                    }

                    .search-input-container.is-active input {
                        background-color: rgba(255, 255, 255, 1);
                        border-color: #a0aec0;
                        color: #1f2937;
                        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                    }

                    .search-input-container.is-active input::placeholder {
                        color: #a0aec0;
                    }

                    .search-input-container .search-icon,
                    .search-input-container .clear-icon {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        cursor: pointer;
                        transition: color 0.3s ease-in-out;
                        z-index: 1;
                        font-size: 1.2rem;
                    }

                    .search-input-container .search-icon {
                        left: 15px;
                        color: #fff; /* Search icon is white */
                    }

                    .search-input-container .clear-icon {
                        right: 15px;
                        color: #cbd5e0;
                    }

                    .search-input-container.is-active .search-icon,
                    .search-input-container.is-active .clear-icon {
                        color: #4a5568;
                    }

                    .search-input-container .clear-icon:hover {
                        color: #1a202c;
                    }
                    .search-input-container .search-icon:hover {
                        color: #1a202c;
                    }
                `}
            </style>
            <div className="container mx-auto px-4">
                {role !== "Restaurant" && (
                    <section className="mb-10 animate-fadeIn">
                        <div
                            className="relative w-full rounded-xl overflow-hidden shadow-lg"
                            style={{ height: "400px" }}
                        >
                            <img
                                src="https://res.cloudinary.com/djwn5bkj7/image/upload/v1747459591/pexels-chanwalrus-941861_umxyxf.jpg"
                                alt="Restaurant Banner"
                                className="absolute inset-0 w-full h-full object-cover brightness-75"
                                style={{ border: "2px black white", boxShadow: "0px 0px 8px black" }}
                            />
                            <div className="absolute inset-0 flex justify-center items-center banner-overlay-animation">
                                <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-md max-w-xl w-full text-center search-bar-animation">
                                    <h2 className="text-white text-3xl font-bold mb-4 animate-slideUp">
                                        Discover Great Places to Eat
                                    </h2>
                                    <div className={`search-input-container flex items-center ${searchQuery ? "is-active" : ""}`}>
                                        <FaSearch className="search-icon ms-1" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => handleSearch(e.target.value)}
                                            placeholder="Search by restaurant name or cuisine"
                                            className="input w-full ps-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold transition-all duration-300"
                                        />
                                        {searchQuery && (
                                            <IoClose
                                                className="clear-icon"
                                                onClick={clearSearch}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="mt-8 d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
                    <h2 className="text-gray-800 text-4xl font-semibold mb-6 animate-slideUp">
                        {isFilteredRestaurant ? "Search Results" : "Popular Restaurants"}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 d-flex justify-content-start align-items-center animate-fadeIn" style={{ gap: "2rem", flexWrap: "wrap", width: "100%" }}>
                        {isFilteredRestaurant ? (
                            filteredRestaurant.length === 0 ? (
                                <div className="text-gray-600 font-semibold text-lg col-span-full text-center animate-fadeIn">
                                    No restaurants found matching your search.
                                </div>
                            ) : (
                                filteredRestaurant.map((restaurant, index) => (
                                    <div key={restaurant._id} style={{ animationDelay: `${index * 0.05}s` }} className="restaurant-card-animation">
                                        <RestaurantCard resdata={restaurant} />
                                    </div>
                                ))
                            )
                        ) : restaurantData?.length === 0 ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <RestaurantListShimmer key={index} />
                            ))
                        ) : (
                            restaurantData?.map((restaurant, index) => (
                                <div key={restaurant._id} style={{ animationDelay: `${index * 0.05}s` }} className="restaurant-card-animation">
                                    <RestaurantCard resdata={restaurant} />
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* New Section 1: Featured Cuisines */}
                 <section className="mt-12 animate-fadeIn">
                    <h2 className="text-gray-800 text-4xl font-semibold mb-6 text-center animate-slideUp">
                        Explore Popular Cuisines
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 animate-fadeIn">
                        {[
                            {
                                name: "Italian",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747871098/FOA_Restaurants/6.png.jpg",
                                description: "Savor authentic Italian dishes like pasta, pizza, and gelato.",
                            },
                            {
                                name: "Indian",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747870834/FOA_Restaurants/5.png.jpg",
                                description: "Enjoy spicy curries, tandoori, and flavorful biryanis.",
                            },
                            {
                                name: "Japanese",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747870086/FOA_Restaurants/4.png.jpg",
                                description: "Experience sushi, ramen, and tempura at its finest.",
                            },
                              {
                                name: "Chines",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747857714/FOA_Restaurants/Gemini_Generated_Image_up3uxxup3uxxup3u.png.jpg",
                                description: "Savor authentic Italian dishes like pasta, pizza, and gelato.",
                            },
                            {
                                name: "Britain",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1748622972/image_4_xfewj5.jpg",
                                description: "Enjoy spicy curries, tandoori, and flavorful biryanis.",
                            },
                            {
                                name: "Japanese",
                                image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1748622993/image_9_gpnisu.jpg",
                                description: "Experience sushi, ramen, and tempura at its finest.",
                            },
                        ].map((cuisine, index) => (
                            <div
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                className="restaurant-card-animation"
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={cuisine.image}
                                        alt={cuisine.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-800">{cuisine.name}</h3>
                                        <p className="text-gray-600 mt-2">{cuisine.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section> *
               
                {/* New Section 2: Customer Reviews */}
              <section className="mt-12 mb-12 animate-fadeIn">
             <h2 className="text-gray-800 text-4xl font-semibold mb-6 text-center animate-slideUp">
             What Our Customers Say
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 animate-fadeIn">
        {[
       {
        name: "Amit Sharma",
        review: "Amazing food and great ambiance! The Italian restaurant was a delight.",
        rating: 5,
        image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747868663/FOA_users/Gemini_Generated_Image_tzzqr0tzzqr0tzzq.png.png", // Placeholder image for Amit
      },
      {
        name: "Priya Singh",
        review: "The sushi here is top-notch. Highly recommend the Japanese place!",
        rating: 4,
        image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747869836/FOA_users/Gemini_Generated_Image_9ispui9ispui9isp.png.png", // Placeholder image for Priya
      },
        {
        name: "Nihal Sharma",
        review: "Amazing food and great ambiance! The Italian restaurant was a delight.",
        rating: 5,
        image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747870643/FOA_users/Gemini_Generated_Image_bz7aipbz7aipbz7a.png.png", // Placeholder image for Amit
      },
      {
        name: "Rajan Singh",
        review: "The sushi here is top-notch. Highly recommend the Japanese place!",
        rating: 4,
        image: "https://res.cloudinary.com/djwn5bkj7/image/upload/v1747871940/FOA_users/Gemini_Generated_Image_n30fk4n30fk4n30f.png.png", // Placeholder image for Priya
      },
    ].map((review, index) => (
      <div
        key={index}
        style={{ animationDelay: `${index * 0.1}s` }}
        className="restaurant-card-animation"
      >
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
          <img
            src={review.image}
            alt={`${review.name}'s profile`}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
            <div className="flex mt-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.467a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.467a1 1 0 00-1.175 0l-3.39 2.467c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.737 9.397c-.784-.57-.382-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
            </section>
            </div>
        </div>
    );
};

export default RestaurantList;


















































