// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   NewCurrentOrder,
//   getCurrentOrders,
//   getPastOrders,
// } from "../../Redux/Slices/orderSlice.js";
// import AppLayout from "../../Layout/AppLayout";
// import { socket } from "../../App.jsx";
// import CurrentOrdersList from "../../Components/Order/CurrentOrdersList.jsx";
// import PastOrdersList from "../../Components/Order/PastOrdersList.jsx";
// import OrderNavbar from "../../Components/Order/OrderNavbar.jsx";
// import toast from "react-hot-toast";

// const MyOrder = () => {
//   const dispatch = useDispatch();

//   const { data } = useSelector((state) => state.auth);

//   const [isPast, setIsPast] = useState(false);

//   async function fetchCurrentOrders() {
//     await dispatch(getCurrentOrders());
//   }

//   async function fetchPastOrders() {
//     await dispatch(getPastOrders());
//   }

//   useEffect(() => {
//     isPast ? fetchPastOrders() : fetchCurrentOrders();

//     socket.on("orderPlaced", ({ userId, newOrder }) => {
//       if (data._id == userId) {
//         toast.success("New Order For Restaurant");
//         dispatch(NewCurrentOrder(newOrder));
//       }
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [isPast]);

//   return (
//     <AppLayout>
//       <div className="mx-40 bg-slate-100">
//         <OrderNavbar isPast={isPast} setIsPast={setIsPast} />
//         <div>{!isPast ? <CurrentOrdersList /> : <PastOrdersList />}</div>
//       </div>
//     </AppLayout>
//   );
// };

// export default MyOrder;














import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NewCurrentOrder,
  getCurrentOrders,
  getPastOrders,
} from "../../Redux/Slices/orderSlice.js";
import AppLayout from "../../Layout/AppLayout";
import { socket } from "../../App.jsx";
import CurrentOrdersList from "../../Components/Order/CurrentOrdersList.jsx";
import PastOrdersList from "../../Components/Order/PastOrdersList.jsx";
import OrderNavbar from "../../Components/Order/OrderNavbar.jsx";
import toast from "react-hot-toast";

const MyOrder = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const [isPast, setIsPast] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  async function fetchCurrentOrders() {
    setLoading(true);
    await dispatch(getCurrentOrders());
    setLoading(false);
  }

  async function fetchPastOrders() {
    setLoading(true);
    await dispatch(getPastOrders());
    setLoading(false);
  }

  useEffect(() => {
    isPast ? fetchPastOrders() : fetchCurrentOrders();

    socket.on("orderPlaced", ({ userId, newOrder }) => {
      if (data._id == userId) {
        toast.success("New Order For Restaurant");
        dispatch(NewCurrentOrder(newOrder));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [isPast, dispatch, data._id]); // Added dispatch and data._id to dependency array

  if (loading) {
    return <p>Loading orders...</p>
  }

  return (
    <AppLayout>
      <div className="mx-40 bg-slate-100">
        <OrderNavbar isPast={isPast} setIsPast={setIsPast} />
        <div>{!isPast ? <CurrentOrdersList /> : <PastOrdersList />}</div>
      </div>
    </AppLayout>
  );
};

export default MyOrder;
