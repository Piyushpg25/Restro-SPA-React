import {CategoryList} from '../components/CategoryList';
import {ProductList} from '../components/ProductList';

export const Menu = () => {
  return (
    <div>
        <h1>Our Menu</h1>
        <CategoryList />
        <ProductList />
    </div>
  )
}
