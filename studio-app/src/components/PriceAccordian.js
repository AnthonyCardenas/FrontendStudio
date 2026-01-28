import "./PriceAccordian.css";

import { useState } from "react";

const gold = [
  {
    title: "8 hours of coverage",
    content:
      "Full-day coverage capturing every meaningful moment from start to finish.",
  },
  {
    title: "24-Hour Sneak Peek",
    content:
      "We will provide a sneak peek of your wedding album within 24 hours.",
  },
  {
    title: "5-8 minute Wedding Film",
    content:
      "A cinematic wedding film telling your story with professional editing and sound.",
  },
  {
    title: "200+ final digital images",
    content: "Receive high-quality prints directly from your private gallery.",
  },
  {
    title: "Complimentary engagement session",
    content:
      "A relaxed engagement shoot to get comfortable in front of the camera.",
  },
];
const desc =
  "For couples who want the full story beginning to end told through photo and video";

export default function PriceAccordian({
  imageSrc,
  packname = "Gold Package",
  price = "3000",
  items = { gold },
  description = { desc },
}) {
  const [active, setActive] = useState(null);

  return (
    <section className="pricing-wrapper">
      <div className="image-wrapper">
        <div className="pricing-image">
          <img src={imageSrc} alt="Wedding" />
        </div>
      </div>

      <div className="pricing-content">
        <h2 className="pricing-title">
          {packname} - ${price}
        </h2>

        <p className="pricing-description">{description}</p>

        <div className="accordion">
          {items.map((item, i) => (
            <div
              key={i}
              className={`accordion-item ${active === i ? "open" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => setActive(active === i ? null : i)}
              >
                {item.title}
                <span className="chevron">⌄</span>
              </button>

              <div className="accordion-body">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function PriceAccordian({ price = "$3000", imageSrc }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="pricing-section">
//       {/* LEFT SIDE */}
//       <div className="pricing-content">
//         <h2 className="pricing-title">
//           Gold Package — <span>{price}</span>
//         </h2>

//         <p className="pricing-subtitle">
//           For couples who want the full story beginning to end told through
//           photo and video
//         </p>

//         <div className="accordion">
//           {accordionData.map((item, index) => (
//             <div
//               key={index}
//               className={`accordion-item ${
//                 activeIndex === index ? "active" : ""
//               }`}
//             >
//               <button
//                 className="accordion-header"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 {item.title}
//                 <span className="icon">⌄</span>
//               </button>

//               <div className="accordion-body">{item.content}</div>
//             </div>
//           ))}
//         </div>

//         {/* <a href="#" className="learn-more-btn">
//           Learn more
//         </a> */}
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="pricing-image">
//         <img src={imageSrc} alt="Pricing" />
//       </div>
//     </section>
//   );
// }

// export default PriceAccordian;
