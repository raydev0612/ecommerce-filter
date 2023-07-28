import './Category.css'

const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className='chekmark'></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className='chekmark'></span>Sneakers
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className='chekmark'></span>Flats
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className='chekmark'></span>Sandals
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className='chekmark'></span>Heels
        </label>
      </div>
    </div>
  )
}

export default Category