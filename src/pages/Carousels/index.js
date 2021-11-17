import React, { useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { CenterCars } from './styled';
import datas from './datas';

export default function Carousels() {
  const [data] = useState(datas);

  const options = {
    item: 6,
    nav: true,
    rewind: true,
    margin: 3,
  };
  return (
    <CenterCars>
      <div className="back">
        <p>good things</p>
      </div>
      <OwlCarousel options={options}>
        {data.map((item) => (
          <div className=" item card" key={item.id}>
            <img src={item.Fotos[0]} alt={`pic-${item.id}`} />

            <div className="desc">
              <button type="button">function</button>
              <p className="legend">{item.message}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </CenterCars>
  );
}
