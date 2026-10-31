import {categories} from '../data/categories';

export const CategoryList = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className='categories-section'>
        <h1>Categories</h1>
        <div className="category-list">
            {categories.map((c) => (
                <button className={c.name === selectedCategory ? "active" : ""} key={c.id} onClick={() => setSelectedCategory(c.name)}>
                    {c.name} {c.icon}
                </button>
            ))}
        </div>
    </div>
  )
}
