

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import OrderCard from "../../Components/Cards/OrderCard.jsx";
// import NoOrder from "../../Components/Order/NoOrder";
// import {
//   // Corrected the import name to match the export in orderSlice.js
//   getAllPrepredOrdersBydmId, // Changed from getAllPreparedOrdersBydmId
//   pushOrderToAllPrepredOrders,
// } from "../../Redux/Slices/orderSlice.js";
// import { socket } from "../../App.jsx";

// const DeliveryManHomePage = () => {
//   const dispatch = useDispatch();
//   const { role, data } = useSelector((state) => state.auth);

//   const { AllPrepredOrders } = useSelector((state) => state?.order);

//   useEffect(() => {
//     socket.on("orderPrepared", (data) => {
//       console.log("Received orderPrepared event:", data);
//       const { order, deliverymanId } = data;
//       // Correct comparison: data._id is deliverymanId? (Assuming 'data' here is the Redux auth state 'data.data')
//       // You might want to clarify what 'data._id' refers to here.
//       // If deliverymanId from socket event is the ID, then it should be compared with data.data._id
//       // Assuming 'data' from useSelector is `state.auth.data`
//       if (deliverymanId === data._id) { // This comparison might need refinement based on your exact data structure
//         console.log("This order is for me:", order);
//         dispatch(pushOrderToAllPrepredOrders(order));
//       }
//     });

//     return () => {
//       socket.off("orderPrepared"); // Remove listener on unmount, better than disconnecting socket here
//     };
//   }, [dispatch, data._id]); // Added data._id to dependencies for clarity if used in socket.on logic

//   useEffect(() => {
//     if (data?._id) {
//       // Using the correctly imported function name
//       dispatch(getAllPrepredOrdersBydmId(data._id));
//     }
//   }, [dispatch, data?._id]);

//   return (
//     <div>
//       <div className="text-2xl text-center mt-5 border border-black-2 bg-red-100">
//         Prepared Orders by your Selected Restaurants
//       </div>
//       <div>
//         {AllPrepredOrders?.length !== 0 ? (
//           <div className="flex flex-col gap-10 m-10">
//             {[...AllPrepredOrders].reverse().map((order) => (
//               <OrderCard key={order?._id} order={order} />
//             ))}
//           </div>
//         ) : (
//           <NoOrder order="Prepared" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DeliveryManHomePage;
























import React, { useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../../Components/Cards/OrderCard.jsx";
import NoOrder from "../../Components/Order/NoOrder";
import {
  getAllPrepredOrdersBydmId, // Corrected import
  pushOrderToAllPrepredOrders,
} from "../../Redux/Slices/orderSlice.js";
import { socket } from "../../App.jsx";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-red-600 p-10">
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const DeliveryManHomePage = () => {
  const dispatch = useDispatch();
  const { role, data } = useSelector((state) => state.auth);
  const { AllPrepredOrders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    const handleOrderPrepared = (socketData) => {
      console.log("Received orderPrepared event:", socketData);
      const { order, deliverymanId } = socketData;
      // Assuming data is state.auth.data, and _id is nested in data.data
      const userId = data?.data?._id;
      if (deliverymanId && userId && deliverymanId === userId && order) {
        console.log("This order is for me:", order);
        dispatch(pushOrderToAllPrepredOrders(order));
      } else {
        console.log("Order ignored: Invalid deliverymanId or order", { deliverymanId, userId });
      }
    };

    socket.on("orderPrepared", handleOrderPrepared);

    return () => {
      socket.off("orderPrepared", handleOrderPrepared);
    };
  }, [dispatch, data?.data?._id]);

  useEffect(() => {
    if (data?.data?._id) {
      dispatch(getAllPrepredOrdersBydmId(data.data._id));
    }
  }, [dispatch, data?.data?._id]);

  // Ensure AllPrepredOrders is an array
  const orders = Array.isArray(AllPrepredOrders) ? AllPrepredOrders : [];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        <div className="text-2xl text-center mt-5 border border-gray-300 bg-red-100 py-4">
          Prepared Orders by Your Selected Restaurants
        </div>
        <div className="p-4">
          {loading ? (
            <div className="text-center text-gray-600">Loading orders...</div>
          ) : error ? (
            <div className="text-center text-red-600">
              Error: {error.message || "Failed to load orders"}
            </div>
          ) : orders.length > 0 ? (
            <div className="flex flex-col gap-10 m-10">
              {orders.slice().reverse().map((order) => (
                <OrderCard key={order?._id} order={order} />
              ))}
            </div>
          ) : (
            <NoOrder order="Prepared" />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DeliveryManHomePage;