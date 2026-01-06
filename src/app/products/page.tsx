// Replace the useEffect fetch section with this:
const [products, setProducts] = useState<Product[]>([
  {
    id: 1,
    name: "Summer Floral Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1574251557236-5325e0d7b748?w=300",
    category: "Dresses"
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", 
    category: "Shoes"
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
    category: "Accessories"
  }
]);
const [loading, setLoading] = useState(false); // No loading needed




