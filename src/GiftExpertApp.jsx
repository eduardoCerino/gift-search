import React,{useState} from 'react'
import { AddCategory, GiftGrid } from './components'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunch' ])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return
        setCategories([newCategory, ...categories ])
    }

  return (
    <div className='main'>

        <div className="header">
            <div className="title_gif">
                <h2>Powered by</h2>
                <img src="../src/assets/Giphy-logo.svg" alt="giphy logo." />    
            </div>

            <div className="search">
                <AddCategory onNewCategory={ onAddCategory} />
            </div>
        </div>

        <div className="content">
            {
                categories.map(category => (
                    <GiftGrid
                    key={category}
                    category={category}
                    />
                ))
            }
        </div>
    

    </div>
  )
}

export default GiftExpertApp