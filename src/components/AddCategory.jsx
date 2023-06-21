import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) =>{
        setinputValue(target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();

        const nuevoValue = inputValue.trim();
        
        if( nuevoValue.length <= 1) return;

        onNewCategory( nuevoValue );

        //setCategories( categories => [ ...categories, inputValue ]);
        setinputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gif..."
            value={inputValue}
            onChange={ onInputChange }
            />
    </form>
  )
}
