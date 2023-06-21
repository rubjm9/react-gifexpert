import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Lord of the rings']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) {
            console.error("Esta categoría ya existe");
            return;
        }

        setCategories([ newCategory, ...categories ]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ (event) => onAddCategory(event) }
        />
        
        {
            categories.map( ( category ) => (
                <GifGrid 
                    key={category} 
                    category={category} 
                />
            ))
        }
    </>
  )
}
