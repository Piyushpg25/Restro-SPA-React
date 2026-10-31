import {CategoryList} from '../components/CategoryList';
import {ProductList} from '../components/ProductList';
import {useState} from 'react';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  return (
    <div>
        <h1 style={{margin:'20px'}}>Our Menu</h1>
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={(category) => setSelectedCategory(category.trim())} />

        <ProductList selectedCategory={selectedCategory} />
    </div>
  )
}
