import React,{useState} from 'react'
import { AddCategory, GiftGrid } from './components'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunch' ])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return
        setCategories([newCategory, ...categories ])
    }

  return (
    <>
    <h1> Buscar GIFS</h1>
        <AddCategory onNewCategory={ onAddCategory} />

            {
                categories.map(category => (
                    <GiftGrid
                    key={category}
                    category={category}
                    />
                ))
            }
    </>
  )
}

export default GiftExpertApp