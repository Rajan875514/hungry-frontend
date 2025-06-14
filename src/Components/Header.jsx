
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUtensils,
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut, FiUser, FiHome, FiInfo, FiMail } from "react-icons/fi";
import { GiFullPizza, GiSodaCan, GiChickenOven } from "react-icons/gi";
import { logout } from "../Redux/Slices/authSlice.js";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable NavLink component
const NavLink = ({ to, icon, text, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-800 transition-all duration-300 text-white"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </Link>
);

// CartIcon component
const CartIcon = ({ count, onClick }) => (
  <Link
    to="/cart"
    onClick={onClick}
    className="relative flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-800 transition-all duration-300 text-white"
  >
    <FaShoppingCart />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {count}
      </span>
    )}
  </Link>
);

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, role, data } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const [logoHover, setLogoHover] = useState(false);
  const [foodIcons] = useState([
    <FaHamburger key="burger" />,
    <FaPizzaSlice key="pizza" />,
    <GiFullPizza key="fullpizza" />,
    <FaIceCream key="icecream" />,
    <GiSodaCan key="soda" />,
    <GiChickenOven key="chicken" />,
  ]);
  const [currentFoodIcon, setCurrentFoodIcon] = useState(0);

  // Rotate food icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFoodIcon((prev) => (prev + 1) % foodIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [foodIcons.length]);

  const handleLogout = async () => {
    await dispatch(logout());
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cartCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <header className="bg-gradient-to-r from-orange-900 via-orange-800 to-amber-900 text-white shadow-xl sticky top-0 z-50 border-b border-amber-400/20">
      {/* Animated background icons */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-400"
            initial={{
              scale: 0,
              opacity: 0,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          >
            {foodIcons[Math.floor(Math.random() * foodIcons.length)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="flex items-center space-x-2"
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
            >
              <motion.div
                animate={{
                  scale: logoHover ? [1, 1.1, 1] : 1,
                  rotate: logoHover ? [0, 10, -10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFoodIcon}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {foodIcons[currentFoodIcon]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <motion.span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400"
                whileHover={{ scale: 1.05 }}
              >
                {role || "HUngryHIghwway"}
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon={<FiHome />} text="Home" />
            <NavLink to="/restaurant" icon={<FaUtensils />} text="Restaurant" />
            <NavLink to="/about" icon={<FiInfo />} text="About" />
            <NavLink to="/contact" icon={<FiMail />} text="Contact" />
            {role !== "Restaurant" && role !== "DeliveryMan" && (
              <CartIcon count={cartCount} />
            )}
          </nav>

          {/* Desktop Auth / Profile Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <motion.button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 focus:outline-none group"
                  whileHover={{ scale: 1.05 }}
                >
                  {data?.photo?.photoUrl ? (
                    <motion.img
                      src={data.photo.photoUrl}
                      alt="User"
                      className="w-9 h-9 rounded-full border-2 border-amber-400/50 object-cover shadow-md hover:border-amber-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  ) : (
                    <motion.div
                      className="w-9 h-9 rounded-full bg-orange-900 flex items-center justify-center border-2 border-amber-400/50 hover:border-amber-400 transition-all duration-300"
                      whileHover={{ rotate: 20 }}
                    >
                      <FiUser className="text-amber-200" />
                    </motion.div>
                  )}
                  <motion.span
                    className="text-amber-100 group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {data?.name || "Profile"}
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {profileMenuOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-orange-900 shadow-2xl rounded-md overflow-hidden text-white z-50"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-orange-700"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/myorder"
                          className="block px-4 py-2 hover:bg-orange-700"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-red-700 flex items-center"
                        >
                          <FiLogOut className="mr-2" />
                          Logout
                        </button>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-amber-600 px-4 py-2 rounded hover:bg-amber-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-orange-900 border-t border-amber-400/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  icon={<FiHome />}
                  text="Home"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavLink
                  to="/restaurant"
                  icon={<FaUtensils />}
                  text="Restaurant"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavLink
                  to="/about"
                  icon={<FiInfo />}
                  text="About"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavLink
                  to="/contact"
                  icon={<FiMail />}
                  text="Contact"
                  onClick={() => setMobileMenuOpen(false)}
                />
                {role !== "Restaurant" && role !== "DeliveryMan" && (
                  <CartIcon
                    count={cartCount}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                )}
                {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/profile"
                      icon={<FiUser />}
                      text="My Profile"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                    <NavLink
                      to="/orders"
                      icon={<FaShoppingCart />}
                      text="My Orders"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 text-white transition-all duration-300"
                    >
                      <FiLogOut className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    icon={<FiUser />}
                    text="Login"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;



























