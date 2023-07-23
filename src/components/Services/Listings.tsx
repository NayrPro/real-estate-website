import { Property } from './Property';
import PropertyCard from './PropertyCard';
import { useState, useEffect } from 'react'; 
import {Swiper, SwiperSlide} from 'swiper/react';
import './Properties.scss';
import 'swiper/css';
import { getAsyncProperties } from '../../Store/reducers/propertiesReducer';
import { RootState } from "../../Store/store";
import { useAppDispatch, useAppSelector } from '../../Store/hooks';


export const Listings: React.FC = () => {
  const properties = useAppSelector((state : RootState) => state.properties.values);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [slidesNb, setSlidesNb] = useState<number>(3);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncProperties({}))
  }, []);


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);
    if(windowSize>1200){ setSlidesNb(3)};
    if(windowSize<1200 && windowSize>780){ setSlidesNb(2)};
    if(windowSize<780){setSlidesNb(1)};

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(()=>{
    setWindowSize(window.innerWidth)
    if(windowSize>1200){ setSlidesNb(3)};
    if(windowSize<1200 && windowSize>780){ setSlidesNb(2)};
    if(windowSize<780){setSlidesNb(1)};
    
  }, [windowSize]);

  return (
    <div className="properties">
      <h1>Properties for Sale</h1>
      <Swiper className="property-grid property-flex" 
      spaceBetween={45}
      slidesPerView={slidesNb}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        {properties.slice(0, 9).map((property : Property) => (
          <SwiperSlide key={property._id + 5}>
            <PropertyCard key={property._id} property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
