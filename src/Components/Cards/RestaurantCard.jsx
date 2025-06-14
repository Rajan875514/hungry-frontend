// // import React from "react";
// // import { MdOutlineStar } from "react-icons/md";
// // import { useNavigate } from "react-router-dom";

// // const RestaurantCard = ({ resdata }) => {
// //   const navigate = useNavigate();

// //   return (
// //     <div
// //       onClick={(e) => navigate("/restaurant/details", { state: { resdata } })}
// //       className="card w-96 bg-base-100 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
// //     >
// //       <figure>
// //         <img
// //           className="w-96 h-60 "
// //           src={resdata?.photo?.photoUrl}
// //           alt="resPhoto"
// //         />
// //       </figure>
// //       <div className="card-body flex flex-col gap-3">
// //         <div className="flex items-center justify-between">
// //           <h2 className="card-title">
// //             {resdata?.restaurantName}
// //             {/* <div className="badge badge-success">OPEN</div> */}
// //           </h2>
// //           <div className="bg-green-500 w-10 h-6 rounded-full flex items-center justify-evenly p-1">
// //             <p className="text-sm">4.4</p>
// //             <MdOutlineStar />
// //           </div>
// //         </div>
// //         <div className="card-actions flex gap-0 justify-start">
// //           {resdata?.cuisines?.map((cuisine) => {
// //             return (
// //               <span
// //                 key={cuisine}
// //                 className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
// //               >
// //                 {cuisine}
// //               </span>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RestaurantCard;



import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// यह फंक्शन Cloudinary से इमेज को केवल क्वालिटी और फॉर्मेट ऑप्टिमाइज़ करके लाने के लिए है
// यह इमेज के मूल आयामों को नहीं बदलेगा, जैसा कि Cloudinary पर अपलोड किया गया है।
const getCloudinaryOptimizedUrl = (url) => { // 'width' और 'height' पैरामीटर्स हटा दिए गए हैं
  // अगर URL null या undefined है तो खाली स्ट्रिंग वापस करें
  if (!url) {
    console.warn("Cloudinary URL is missing for an image.");
    return "";
  }

  // Cloudinary URL को '/upload/' पर विभाजित करें
  const parts = url.split('/upload/');

  // सुनिश्चित करें कि URL सही Cloudinary प्रारूप में है
  if (parts.length === 2) {
    // यहाँ केवल क्वालिटी (q_auto:good), फॉर्मेट (f_auto) और DPR (dpr_auto) ट्रांसफॉर्मेशन जोड़ें
    // 'w_', 'h_', 'c_fill' जैसे साइज़िंग ट्रांसफॉर्मेशन हटा दिए गए हैं।
    const transformation = `q_auto:good,f_auto,dpr_auto`; // साइज़िंग पैरामीटर्स हटा दिए गए

    // ट्रांसफॉर्मेशन के साथ नया Cloudinary URL वापस करें
    return `${parts[0]}/upload/${transformation}/${parts[1]}`;
  }

  // अगर URL सही Cloudinary प्रारूप में नहीं है तो मूल URL वापस करें
  console.warn("Cloudinary URL format is unexpected:", url);
  return url;
};

const RestaurantCard = ({ resdata }) => {
  const navigate = useNavigate();

  // अब targetWidth और targetHeight की यहाँ सीधे ज़रूरत नहीं है क्योंकि
  // हम Cloudinary से साइज़ ट्रांसफॉर्मेशन का अनुरोध नहीं कर रहे हैं।
  // इमेज का साइज़ CSS (`w-96 h-60`) द्वारा नियंत्रित होगा।
  // इसलिए, इन वेरिएबल्स को हटा सकते हो या उन्हें बस टिप्पणी (comment) कर सकते हो।
  // const targetWidth = 600;
  // const targetHeight = 400;

  return (
    <div
      onClick={(e) => navigate("/restaurant/details", { state: { resdata } })}
      className="card w-96 bg-base-100 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
    >
      <figure>
        <img
          className="w-96 h-60 object-cover" // object-cover यह सुनिश्चित करता है कि इमेज कंटेनर को भरे और क्रॉप हो
          // यहाँ ऑप्टिमाइज़्ड URL का उपयोग करें, बिना width/height पैरामीटर्स के
          src={getCloudinaryOptimizedUrl(resdata?.photo?.photoUrl)} // targetWidth, targetHeight हटा दिए गए
          alt={resdata?.restaurantName || "Restaurant Photo"}
        />
      </figure>
      <div className="card-body flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="card-title">
            {resdata?.restaurantName}
          </h2>
          <div className="bg-green-500 w-10 h-6 rounded-full flex items-center justify-evenly p-1 text-white">
            <p className="text-sm">{resdata?.rating || 'N/A'}</p>
            <MdOutlineStar />
          </div>
        </div>
        <div className="card-actions flex gap-0 justify-start">
          {resdata?.cuisines?.map((cuisine) => {
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
  );
};

export default RestaurantCard;