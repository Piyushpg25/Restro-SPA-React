import {categories} from '../data/categories';

export const CategoryList = () => {
  return (
    <div className='categories-section'>
        <h1>Categories</h1>
        <div className="category-list">
            {categories.map((c) => (
                <button key={c.id}>
                    {c.name}
                </button>
            ))}
        </div>
    </div>
  )
}
