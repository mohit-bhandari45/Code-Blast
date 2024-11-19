import { Button } from '../ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white flex-wrap">
      <div className="font-bold text-2xl">CodeDuel</div>
      <nav className="space-x-4 mt-4 md:mt-0">
        <Link href={'/login'}>
          <Button className="bg-white text-black border-2 border-black hover:bg-gray-300">
            Login
          </Button>
        </Link>
        <Link href={'/signup'}>
          <Button className="bg-white text-black border-2 border-black hover:bg-gray-300">
            Sign Up
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;