import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GiftGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs( category )

  return (
    <div>

        <h2>{category}</h2>

        {
          isLoading && <h2> Loading..</h2>
        }

        <div className="card-grid">
          <GifItem images={images}/>
        </div>

    </div>
  )
}

