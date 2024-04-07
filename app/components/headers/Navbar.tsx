import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container bg-gray-900 mx-auto flex justify-between items-center">
        <Link className="bg-gray-900 text-white text-xl font-bold" href="/">
          MyShop
        </Link>
        <div className="flex space-x-4 bg-gray-900">
          <Link className="bg-gray-900 text-white hover:text-gray-300" href="/app/products/new">
            Add Product
          </Link>
          <Link className="bg-gray-900 text-white hover:text-gray-300" href="/">
            products
          </Link>
          <Link className="bg-gray-900 text-white hover:text-gray-300" href="#">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
