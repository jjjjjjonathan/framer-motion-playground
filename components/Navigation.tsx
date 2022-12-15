import { motion } from 'framer-motion';
import NavItem from './NavItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul
    variants={variants}
    className='mx-auto my-auto h-full w-[230px] bg-transparent'
  >
    <NavItem text='ABOUT' />
    <NavItem text='PORTFOLIO' />
    <NavItem text='CONTACT' />
  </motion.ul>
);

export default Navigation;
