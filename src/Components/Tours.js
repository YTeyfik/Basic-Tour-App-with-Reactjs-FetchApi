import React from "react";
import Tour from "./Tour";

const Tours = ({ tours,removeTour }) => {
  return (
    <div>
      <div className="title">
        <h2 className="h2">Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
          {tours.map((tour)=>{
              return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          })}
      </div>
    </div>
  );
};

export default Tours;
