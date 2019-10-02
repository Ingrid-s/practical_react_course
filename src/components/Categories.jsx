import React from 'react';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Categories.scss';


const Categories = ({children})=>(
    <div className="categories">
        <h3 className="categories__title">Cómo pasa las categorias por props?</h3>
        {children}
    </div>
    
)
export default Categories;