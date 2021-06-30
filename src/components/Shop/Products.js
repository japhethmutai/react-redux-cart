import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My First Book', description: 'The first book I ever wrote' },
  { id: 'p2', price: 12.49, title: 'My Second Book', description: 'The Second book I ever wrote' },
  { id: 'p3', price: 7.12, title: 'My Third Book', description: 'The Third book I ever wrote' },
  { id: 'p4', price: 3.45, title: 'My Fourth Book', description: 'The Fourth book I ever wrote' },
  { id: 'p5', price: 6.21, title: 'My Fifth Book', description: 'The fifth book I ever wrote' },
  { id: 'p6', price: 8.19, title: 'My Sixth Book', description: 'The sixth book I ever wrote' },
  { id: 'p7', price: 5, title: 'My Seventh Book', description: 'The seventh book I ever wrote' },
  { id: 'p8', price: 10, title: 'My Eighth Book', description: 'The eighth book I ever wrote' },
  { id: 'p9', price: 12, title: 'My Ninth Book', description: 'The nineth book I ever wrote' },
  { id: 'p10', price: 15, title: 'My Tenth Book', description: 'The tenth book I ever wrote' },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
