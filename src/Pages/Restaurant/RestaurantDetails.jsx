// // import React, { useEffect, useState } from "react";
// // import AppLayout from "../../Layout/AppLayout";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { FaPhoneAlt } from "react-icons/fa";
// // import AddFoodItem from "../../Components/Restaurant/AddFoodItem";
// // import {
// //   deleteMenuItem,
// //   fetchMenuItems,
// // } from "../../Redux/Slices/restaurantSlice";
// // import MenuItemCard from "../../Components/Cards/MenuItemCard";
// // import { MdMail, MdOutlineStar } from "react-icons/md";
// // import NoItemImage from "../../Assets/NoMenuItemFound.png";

// // const RestaurantDetails = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const location = useLocation();
// //   const { resdata } = location.state;

// //   const { role, data } = useSelector((state) => state?.auth);
// //   const { menuItems } = useSelector((state) => state?.restaurant);

// //   const [searchText, setSearchText] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [isVeg, setIsVeg] = useState(false);
// //   const [sortBy, setSortBy] = useState("default");

// //   const [editMode, setEditMode] = useState(false);
// //   const [dataToEdit, setDataToEdit] = useState(null);

// //   useEffect(() => {
// //     console.log(resdata);
// //     if (!resdata) {
// //       navigate("/");
// //     } else {
// //       fetchData();
// //     }
// //   }, []);

// //   useEffect(() => {
// //     setSearchResults(menuItems);
// //   }, [menuItems]);

// //   useEffect(() => {
// //     handleSearchSortFilter();
// //   }, [searchText, sortBy, isVeg]);

// //   async function fetchData() {
// //     try {
// //       if (!resdata) {
// //         navigate("/");
// //       } else {
// //         await dispatch(fetchMenuItems(resdata?._id));
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   }

// //   function handleSearchSortFilter() {
// //     let filteredMenuItems = menuItems.filter((item) => {
// //       const matchesSearchText = item.name
// //         .toLowerCase()
// //         .includes(searchText.toLowerCase());
// //       const isVegMatch = isVeg ? item.type === "Veg" : true;
// //       return matchesSearchText && isVegMatch;
// //     });

// //     if (sortBy === "priceHighToLow") {
// //       filteredMenuItems.sort((a, b) => b.price - a.price);
// //     } else if (sortBy === "priceLowToHigh") {
// //       filteredMenuItems.sort((a, b) => a.price - b.price);
// //     }

// //     setSearchResults(filteredMenuItems);
// //   }

// //   function handleDeleteMenuItem(menuItemId) {
// //     confirm = window.confirm("MenuItem Remove");
// //     if (confirm) {
// //       dispatch(deleteMenuItem(menuItemId));
// //     }
// //   }

// //   function handleEditMenuItem(ItemToEdit) {
// //     setEditMode(true);
// //     setDataToEdit(ItemToEdit);
// //   }

// //   return (
// //     <AppLayout>
// //       <div className="w-2/3 border border-x-gray-300 mx-auto h-auto font-custom lg:w-4/5 md:w-11/12 sm:w-full">
// //         <div className="flex gap-16 w-full items-center justify-between py-4 px-10 mt-10">
// //           <div className="flex gap-6">
// //             <div>
// //               <img
// //                 src={resdata?.photo?.photoUrl}
// //                 className="w-60 h-36 rounded-md"
// //               />
// //             </div>
// //             <div className="flex flex-col items-start justify-between gap-2">
// //               <div className="text-2xl font-extrabold">
// //                 {resdata?.restaurantName}
// //               </div>
// //               <div className="text-sm">{resdata?.quickDescription}</div>
// //               <div className="text-xs">{resdata?.address}</div>
// //               <div className="text-xs">
// //                 {resdata?.cuisines[0].split(",")?.map((cuisine) => {
// //                   return (
// //                     <span
// //                       key={cuisine}
// //                       className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
// //                     >
// //                       {cuisine}
// //                     </span>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex flex-col gap-8 items-center">
// //             <div>
// //               {role === "Restaurant" && data?._id === resdata?.user_id && (
// //                 <button
// //                   onClick={() =>
// //                     navigate("/create/Restaurant", {
// //                       state: { dataToEdit: resdata },
// //                     })
// //                   }
// //                   className="btn btn-active btn-link"
// //                 >
// //                   Edit Restaurant Details
// //                 </button>
// //               )}
// //             </div>
// //             <div className="border border-gray-400 font-medium rounded-lg p-1 shadow-md">
// //               <p>
// //                 OPEN <span>{resdata?.openingHours}</span> TO
// //                 <span>{resdata?.closingHours}</span>
// //               </p>
// //             </div>
// //             <div className="flex flex-col p-2 border border-gray-400 w-auto gap-2 rounded-xl shadow-md">
// //               <div className="text-green-400 flex items-center justify-center gap-1">
// //                 4.4 <MdOutlineStar />
// //               </div>
// //               <hr />
// //               <div className="text-gray-500">1M+ Rating</div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* <hr /> */}
// //         <div className="flex gap-32 w-full items-center justify-between py-3 px-12">
// //           <div className="flex flex-col justify-between gap-3">
// //             <p className="text-xl font-bold">About US</p>
// //             <p className="text-sm text-gray-700">
// //               {resdata?.detailedDescription}
// //             </p>
// //           </div>
// //           <div className="flex flex-col items-start justify-between gap-2">
// //             <p className="text-xl font-bold">Contact Info</p>
// //             <p className="flex items-center justify-center gap-2">
// //               <MdMail />
// //               <p className="text-gray-700"> sc494802@gmail.com</p>
// //             </p>
// //             <p className="flex items-center justify-center gap-2 ">
// //               <FaPhoneAlt />{" "}
// //               <p className="text-gray-700"> {resdata?.phoneNumber}</p>
// //             </p>
// //           </div>
// //         </div>
// //         <hr className="mt-5 border-solid border-2 mx-10 border-grey-500" />
// //         {role === "Restaurant" && data?._id === resdata?.user_id && (
// //           <AddFoodItem
// //             resId={resdata._id}
// //             editMode={editMode}
// //             dataToEdit={dataToEdit}
// //             setEditMode={setEditMode}
// //             setDataToEdit={setDataToEdit}
// //           />
// //         )}
// //         <div className="flex gap-40 w-full items-center justify-center mt-5 py-5">
// //           {/* Search and Sort */}
// //           <div className="flex space-x-4 items-center">
// //             {/* Search Input */}
// //             <input
// //               type="text"
// //               value={searchText}
// //               onChange={(e) => setSearchText(e.target.value)}
// //               placeholder="search by menu item name..."
// //               className="input input-bordered input-md w-96 max-w-3xl "
// //             />

// //             {/* Sort Dropdown */}
// //             <div>
// //               <select
// //                 value={sortBy}
// //                 onChange={(e) => setSortBy(e.target.value)}
// //                 className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
// //               >
// //                 <option value="default">Sort By</option>
// //                 <option value="priceHighToLow">Price High To Low</option>
// //                 <option value="priceLowToHigh">Price Low To High</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* Veg Only Toggle */}
// //           <div>
// //             <label className="flex items-center relative w-max cursor-pointer select-none">
// //               <span className="text-lg font-bold mr-3">Veg Only</span>
// //               <input
// //                 type="checkbox"
// //                 className={`appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none  ${
// //                   isVeg ? "bg-green-500 " : "bg-red-500"
// //                 }`}
// //                 checked={false}
// //                 onChange={() => setIsVeg((prevIsVeg) => !prevIsVeg)}
// //               />
// //               <span
// //                 className={`absolute font-medium text-xs uppercase right-1 text-white ${
// //                   isVeg ? "hidden" : ""
// //                 }`}
// //               >
// //                 {" "}
// //                 OFF{" "}
// //               </span>
// //               <span
// //                 className={`absolute font-medium text-xs uppercase right-8 text-white  ${
// //                   isVeg ? "" : "hidden"
// //                 }`}
// //               >
// //                 {" "}
// //                 ON{" "}
// //               </span>
// //               <span
// //                 className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200 ${
// //                   isVeg ? "translate-x-7" : ""
// //                 }`}
// //               />
// //             </label>
// //           </div>
// //         </div>

// //         {role != "Restaurant" ? (
// //           <div className="flex flex-col justify-center items-center">
// //             {searchResults.length == 0 ? (
// //               <div className="flex items-center justify-center">
// //                 <img
// //                   src={NoItemImage}
// //                   alt="No Items Found"
// //                   className="h-[400px] w-[500px]"
// //                 />
// //               </div>
// //             ) : (
// //               searchResults?.map((item) => {
// //                 return <MenuItemCard key={item?._id} menuItem={item} />;
// //               })
// //             )}
// //           </div>
// //         ) : (
// //           <div className="px-36">
// //             <table className="table">
// //               {/* head */}
// //               <thead>
// //                 <tr>
// //                   <th>Name</th>
// //                   <th>Price</th>
// //                   <th>Veg / Non-Veg</th>
// //                   <th>Oprations</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {searchResults.length == 0 ? (
// //                   <tr>No Item Found</tr>
// //                 ) : (
// //                   <>
// //                     {searchResults.map((item) => {
// //                       return (
// //                         <tr key={item._id}>
// //                           <td>
// //                             <div className="flex items-center gap-3">
// //                               <div className="avatar">
// //                                 <div className="mask mask-squircle w-12 h-12">
// //                                   <img
// //                                     src={item?.foodImg?.url}
// //                                     alt="Food Image"
// //                                     className="rounded-md h-28 w-36"
// //                                   />
// //                                 </div>
// //                               </div>
// //                               <div>
// //                                 <div className="font-bold">{item.name}</div>
// //                                 <div className="text-sm opacity-50">
// //                                   {item._id}
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </td>
// //                           <td>
// //                             {item.price}
// //                             <span className="badge badge-ghost badge-sm">
// //                               RS
// //                             </span>
// //                           </td>
// //                           <td className="flex gap-2">
// //                             <span>{item.type}</span>
// //                           </td>
// //                           <td>
// //                             <button
// //                               onClick={() => handleEditMenuItem({ ...item })}
// //                               className="btn btn-info btn-sm mx-3"
// //                             >
// //                               Edit
// //                             </button>
// //                             <button
// //                               onClick={() => handleDeleteMenuItem(item._id)}
// //                               className="btn bg-red-300 btn-sm"
// //                             >
// //                               Delete
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })}
// //                   </>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </AppLayout>
// //   );
// // };

// // export default RestaurantDetails;


























// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     getAllRestaurants,
//     searchRestaurant,
// } from "../../Redux/Slices/restaurantSlice.js";
// import RestaurantCard from "../../Components/Cards/RestaurantCard.jsx";
// import RestaurantListShimmer from "../Shimmer/RestaurantListShimmer.jsx";
// import { FaSearch } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// const RestaurantList = () => {
//     const dispatch = useDispatch();
//     const { restaurantData, filteredRestaurant } = useSelector(
//         (state) => state?.restaurant
//     );
//     const { role } = useSelector((state) => state.auth);

//     const [searchQuery, setSearchQuery] = useState("");
//     const [isFilteredRestaurant, setIsFilteredRestaurant] = useState(false);

//     async function loadAllRestaurants() {
//         if (restaurantData?.length === 0) {
//             await dispatch(getAllRestaurants());
//         }
//     }

//     async function handleSearch(searchText) {
//         setSearchQuery(searchText);
//         if (searchText) {
//             dispatch(searchRestaurant(searchText.toLowerCase()));
//             setIsFilteredRestaurant(true);
//         } else {
//             setIsFilteredRestaurant(false);
//         }
//     }

//     const clearSearch = () => {
//         setSearchQuery("");
//         setIsFilteredRestaurant(false);
//         dispatch(searchRestaurant(""));
//     };

//     useEffect(() => {
//         loadAllRestaurants();
//     }, []);

//     useEffect(() => {

//     }, [searchQuery]);


//     return (
//         <div className="bg-gray-50 py-12">
//             <style>
//                 {`
//                     @keyframes fadeIn {
//                         from { opacity: 0; }
//                         to { opacity: 1; }
//                     }

//                     @keyframes slideUp {
//                         from { opacity: 0; transform: translateY(20px); }
//                         to { opacity: 1; transform: translateY(0); }
//                     }

//                     @keyframes scaleIn {
//                         from { opacity: 0; transform: scale(0.95); }
//                         to { opacity: 1; transform: scale(1); }
//                     }

//                     .animate-fadeIn {
//                         animation: fadeIn 0.8s ease-out;
//                     }

//                     .animate-slideUp {
//                         animation: slideUp 0.6s ease-out;
//                     }

//                     .animate-scaleIn {
//                         animation: scaleIn 0.5s ease-out forwards;
//                     }

//                     .restaurant-card-animation {
//                         animation: scaleIn 0.5s ease-out forwards;
//                     }

//                     .banner-overlay-animation {
//                         animation: fadeIn 1s ease-out;
//                     }

//                     .search-bar-animation {
//                         animation: fadeIn 0.6s ease-out;
//                     }

//                     .search-input-container {
//                         position: relative;
//                         width: 100%;
//                         transition: box-shadow 0.3s ease-in-out;
//                     }

//                     .search-input-container input {
//                         padding: 12px 40px 12px 60px; /* Increased left padding significantly */
//                         background-color: rgba(255, 255, 255, 0.15);
//                         border: 1px solid rgba(255, 255, 255, 0.25);
//                         color: #e2e8f0;
//                         font-size: 1rem;
//                         transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out;
//                     }

//                     .search-input-container input::placeholder {
//                         color: rgba(226, 232, 240, 0.6);
//                     }


//                     .search-input-container.is-active input {
//                         background-color: rgba(255, 255, 255, 1);
//                         border-color: #a0aec0;
//                         color: #1f2937;
//                         box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
//                     }

//                     .search-input-container.is-active input::placeholder {
//                         color: #a0aec0;
//                     }


//                     .search-input-container .search-icon,
//                     .search-input-container .clear-icon {
//                         position: absolute;
//                         top: 50%;
//                         transform: translateY(-50%);
//                         cursor: pointer;
//                         transition: color 0.3s ease-in-out;
//                         z-index: 1;
//                         font-size: 1.2rem;
//                     }

//                     .search-input-container .search-icon {
//                         left: 15px;
//                         color: #fff; /* Search icon is white */
//                     }

//                     .search-input-container .clear-icon {
//                         right: 15px;
//                         color: #cbd5e0;
//                     }

//                     .search-input-container.is-active .search-icon,
//                     .search-input-container.is-active .clear-icon {
//                         color: #4a5568;
//                     }

//                     .search-input-container .clear-icon:hover {
//                         color: #1a202c;
//                     }
//                     .search-input-container .search-icon:hover {
//                         color: #1a202c;
//                     }
//                 `}
//             </style>
//             <div className="container mx-auto px-4">
//                 {role !== "Restaurant" && (
//                     <section className="mb-10 animate-fadeIn">
//                         <div
//                             className="relative w-full rounded-xl overflow-hidden shadow-lg"
//                             style={{ height: "400px" }}
//                         >
//                             <img
//                                 src="https://res.cloudinary.com/djwn5bkj7/image/upload/v1747459591/pexels-chanwalrus-941861_umxyxf.jpg"
//                                 alt="Restaurant Banner"
//                                 className="absolute inset-0 w-full h-full object-cover brightness-75"
//                                 style={{ border: "2px black white", boxShadow: "0px 0px 8px black" }}
//                             />
//                             <div className="absolute inset-0 flex justify-center items-center banner-overlay-animation">
//                                 <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-md max-w-xl w-full text-center search-bar-animation">
//                                     <h2 className="text-white text-3xl font-bold mb-4 animate-slideUp">
//                                         Discover Great Places to Eat
//                                     </h2>
//                                     <div className={`search-input-container flex items-center ${searchQuery ? 'is-active' : ''}`}>
//                                         <FaSearch className="search-icon ms-1" />
//                                         <input
//                                             type="text"
//                                             value={searchQuery}
//                                             onChange={(e) => handleSearch(e.target.value)}
//                                             placeholder="Search by restaurant name or cuisine"
//                                             className="input  w-full ps-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold transition-all duration-300"
//                                         />
//                                         {searchQuery && (
//                                             <IoClose
//                                                 className="clear-icon"
//                                                 onClick={clearSearch}
//                                             />
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 <section className="mt-8 d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
//                     <h2 className="text-gray-800 text-2xl  font-semibold mb-6 animate-slideUp ">
//                         {isFilteredRestaurant ? "Search Results" : "Popular Restaurants"}
//                     </h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 d-flex justify-content-start align-items-center animate-fadeIn" style={{ gap: "2rem", flexWrap: "wrap", width: "100%" }}>
//                         {isFilteredRestaurant ? (
//                             filteredRestaurant.length === 0 ? (
//                                 <div className="text-gray-600 font-semibold text-lg col-span-full text-center animate-fadeIn">
//                                     No restaurants found matching your search.
//                                 </div>
//                             ) : (
//                                 filteredRestaurant.map((restaurant, index) => (
//                                     <div key={restaurant._id} style={{ animationDelay: `${index * 0.05}s` }} className="restaurant-card-animation">
//                                         <RestaurantCard resdata={restaurant} />
//                                     </div>
//                                 ))
//                             )
//                         ) : restaurantData?.length === 0 ? (
//                             Array.from({ length: 8 }).map((_, index) => (
//                                 <RestaurantListShimmer key={index} />
//                             ))
//                         ) : (
//                             restaurantData?.map((restaurant, index) => (
//                                 <div key={restaurant._id} style={{ animationDelay: `${index * 0.05}s` }} className="restaurant-card-animation">
//                                     <RestaurantCard resdata={restaurant} />
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default RestaurantList;




















// RestaurantDetails.jsx

import React, { useEffect, useState } from "react";
import AppLayout from "../../Layout/AppLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import AddFoodItem from "../../Components/Restaurant/AddFoodItem";
import {
  deleteMenuItem,
  fetchMenuItems,
} from "../../Redux/Slices/restaurantSlice";
import MenuItemCard from "../../Components/Cards/MenuItemCard";
import { MdMail, MdOutlineStar } from "react-icons/md";
import NoItemImage from "../../Assets/NoMenuItemFound.png";

const RestaurantDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { resdata } = location.state || {}; // Add default empty object to prevent destructuring error if state is null/undefined

  const { role, data } = useSelector((state) => state?.auth);
  const { menuItems } = useSelector((state) => state?.restaurant);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const [editMode, setEditMode] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    console.log("resdata in RestaurantDetails useEffect:", resdata); // Keep this for debugging!
    if (!resdata || !resdata._id) { // Also check for _id to ensure it's a valid restaurant object
      console.warn("resdata is missing or invalid, navigating home.");
      navigate("/");
    } else {
      fetchData();
    }
  }, [resdata, navigate, dispatch]); // <<-- IMPORTANT: Add resdata, navigate, and dispatch to dependency array

  useEffect(() => {
    setSearchResults(menuItems);
  }, [menuItems]);

  useEffect(() => {
    handleSearchSortFilter();
  }, [searchText, sortBy, isVeg, menuItems]); // Added menuItems here as well, as filtering depends on it.

  async function fetchData() {
    try {
      if (resdata?._id) { // Ensure resdata and _id exist before dispatching
        await dispatch(fetchMenuItems(resdata._id));
      } else {
        console.error("Cannot fetch menu items: resdata or resdata._id is missing.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleSearchSortFilter() {
    let filteredMenuItems = menuItems.filter((item) => {
      const matchesSearchText = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const isVegMatch = isVeg ? item.type === "Veg" : true;
      return matchesSearchText && isVegMatch;
    });

    if (sortBy === "priceHighToLow") {
      filteredMenuItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "priceLowToHigh") {
      filteredMenuItems.sort((a, b) => a.price - b.price);
    }

    setSearchResults(filteredMenuItems);
  }

  function handleDeleteMenuItem(menuItemId) {
    const confirmDelete = window.confirm("Are you sure you want to remove this MenuItem?"); // Use a more descriptive variable name
    if (confirmDelete) {
      dispatch(deleteMenuItem(menuItemId));
    }
  }

  function handleEditMenuItem(ItemToEdit) {
    setEditMode(true);
    setDataToEdit(ItemToEdit);
  }

  return (
    <AppLayout>
      <div className="w-2/3 border border-x-gray-300 mx-auto h-auto font-custom lg:w-4/5 md:w-11/12 sm:w-full">
        <div className="flex gap-16 w-full items-center justify-between py-4 px-10 mt-10">
          <div className="flex gap-6">
            <div>
              <img
                src={resdata?.photo?.photoUrl}
                className="w-60 h-36 rounded-md"
                alt={resdata?.restaurantName} // Added alt text
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <div className="text-2xl font-extrabold">
                {resdata?.restaurantName}
              </div>
              <div className="text-sm">{resdata?.quickDescription}</div>
              <div className="text-xs">{resdata?.address}</div>
              <div className="text-xs">
                {resdata?.cuisines?.[0]?.split(",")?.map((cuisine) => { // Added optional chaining for cuisines[0]
                  return (
                    <span
                      key={cuisine}
                      className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                    >
                      {cuisine}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div>
              {role === "Restaurant" && data?._id === resdata?.user_id && (
                <button
                  onClick={() =>
                    navigate("/create/Restaurant", {
                      state: { dataToEdit: resdata },
                    })
                  }
                  className="btn btn-active btn-link"
                >
                  Edit Restaurant Details
                </button>
              )}
            </div>
            <div className="border border-gray-400 font-medium rounded-lg p-1 shadow-md">
              <p>
                OPEN <span>{resdata?.openingHours}</span> TO
                <span>{resdata?.closingHours}</span>
              </p>
            </div>
            <div className="flex flex-col p-2 border border-gray-400 w-auto gap-2 rounded-xl shadow-md">
              <div className="text-green-400 flex items-center justify-center gap-1">
                4.4 <MdOutlineStar />
              </div>
              <hr />
              <div className="text-gray-500">1M+ Rating</div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="flex gap-32 w-full items-center justify-between py-3 px-12">
          <div className="flex flex-col justify-between gap-3">
            <p className="text-xl font-bold">About US</p>
            <p className="text-sm text-gray-700">
              {resdata?.detailedDescription}
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="text-xl font-bold">Contact Info</p>
            <p className="flex items-center justify-center gap-2">
              <MdMail />
              <p className="text-gray-700"> sc494802@gmail.com</p>
            </p>
            <p className="flex items-center justify-center gap-2 ">
              <FaPhoneAlt />{" "}
              <p className="text-gray-700"> {resdata?.phoneNumber}</p>
            </p>
          </div>
        </div>
        <hr className="mt-5 border-solid border-2 mx-10 border-grey-500" />
        {role === "Restaurant" && data?._id === resdata?.user_id && (
          <AddFoodItem
            resId={resdata._id}
            editMode={editMode}
            dataToEdit={dataToEdit}
            setEditMode={setEditMode}
            setDataToEdit={setDataToEdit}
          />
        )}
        <div className="flex gap-40 w-full items-center justify-center mt-5 py-5">
          {/* Search and Sort */}
          <div className="flex space-x-4 items-center">
            {/* Search Input */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="search by menu item name..."
              className="input input-bordered input-md w-96 max-w-3xl "
            />

            {/* Sort Dropdown */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="default">Sort By</option>
                <option value="priceHighToLow">Price High To Low</option>
                <option value="priceLowToHigh">Price Low To High</option>
              </select>
            </div>
          </div>

          {/* Veg Only Toggle */}
          <div>
            <label className="flex items-center relative w-max cursor-pointer select-none">
              <span className="text-lg font-bold mr-3">Veg Only</span>
              <input
                type="checkbox"
                className={`appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none ${
                  isVeg ? "bg-green-500 " : "bg-red-500"
                }`}
                checked={isVeg} // Changed from false to isVeg
                onChange={() => setIsVeg((prevIsVeg) => !prevIsVeg)}
              />
              <span
                className={`absolute font-medium text-xs uppercase right-1 text-white ${
                  isVeg ? "hidden" : ""
                }`}
              >
                {" "}
                OFF{" "}
              </span>
              <span
                className={`absolute font-medium text-xs uppercase right-8 text-white ${
                  isVeg ? "" : "hidden"
                }`}
              >
                {" "}
                ON{" "}
              </span>
              <span
                className={`w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200 ${
                  isVeg ? "translate-x-7" : ""
                }`}
              />
            </label>
          </div>
        </div>

        {role !== "Restaurant" ? (
          <div className="flex flex-col justify-center items-center">
            {searchResults.length === 0 ? ( // Use strict equality
              <div className="flex items-center justify-center">
                <img
                  src={NoItemImage}
                  alt="No Items Found"
                  className="h-[400px] w-[500px]"
                />
              </div>
            ) : (
              searchResults?.map((item) => {
                return <MenuItemCard key={item?._id} menuItem={item} />;
              })
            )}
          </div>
        ) : (
          <div className="px-36">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Veg / Non-Veg</th>
                  <th>Oprations</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.length === 0 ? ( // Use strict equality
                  <tr>
                    <td colSpan="4" className="text-center">No Item Found</td>
                  </tr> // Added colSpan for better display
                ) : (
                  <>
                    {searchResults.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={item?.foodImg?.url}
                                    alt="Food Image"
                                    className="rounded-md h-28 w-36"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{item.name}</div>
                                <div className="text-sm opacity-50">
                                  {item._id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {item.price}
                            <span className="badge badge-ghost badge-sm">
                              RS
                            </span>
                          </td>
                          <td className="flex gap-2">
                            <span>{item.type}</span>
                          </td>
                          <td>
                            <button
                              onClick={() => handleEditMenuItem({ ...item })}
                              className="btn btn-info btn-sm mx-3"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteMenuItem(item._id)}
                              className="btn bg-red-300 btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default RestaurantDetails;