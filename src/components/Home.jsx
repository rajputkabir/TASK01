// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const [dotIndex, setDotIndex] = useState(0);
//   const dots = ['Ellipse 1.png', 'Ellipse 2.png', 'Ellipse 3.png', 'Ellipse 4.png'];
//   const navigate = useNavigate();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setDotIndex((prevIndex) => {
//         const newIndex = (prevIndex + 1) % dots.length;
//         if (newIndex === 0) {
//           navigate('/Logiin');
//         }
//         return newIndex;
//       });
//     }, 100000); 

//     return () => clearInterval(intervalId);
//   }, [navigate]);

//   return (
//     <>
//       <div className="maincontainer">
//         <div className="images">
//           <div className="secondimage">
//             <img src="4463_sPACKtacular_N-02 1.png" alt="Second" />
//           </div>
//           <div className="firstimage">
//             <img src="4463_sPACKtacular_N-02 2.png" alt="First" />
//           </div>
//         </div>
//         <div className="ellipse">
//           <img src="Ellipse 2.png" alt="Ellipse 2" />
//           <img src="Ellipse 2.png" alt="Ellipse 2 Duplicate" />
//           <img src="Ellipse 3.png" alt="Ellipse 3" />
//           <img src="Ellipse 4.png" alt="Ellipse 4" />
//         </div>
//         <div className="dot-animation-container">
//           <div className="path">
//             <img
//               className={`moving-image`}
//               src={dots[dotIndex]}
//               alt={`Moving Dot - ${dots[dotIndex]}`}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [dotIndex, setDotIndex] = useState(0);
  const totalDots = 4; // Number of dots
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDotIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalDots;
        if (newIndex === 0) {
          navigate('/Logiin');
        }
        return newIndex;
      });
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <>
      <div className="maincontainer">
        <div className="images">
          <div className="secondimage">
            <img src="4463_sPACKtacular_N-02 1.png" alt="Second" />
          </div>
          <div className="firstimage">
            <img src="4463_sPACKtacular_N-02 2.png" alt="First" />
          </div>
        </div>

        
        <div className="ellipse">
          {[...Array(totalDots)].map((_, index) => (
            <img
              key={index}
              className="dot"
              src={dotIndex === index ? "Ellipse 1.png" : "Ellipse 2.png"} 
              alt={`Ellipse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
