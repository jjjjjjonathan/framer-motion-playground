import { motion } from 'framer-motion';

type PathProps = {
  variants: {
    closed: {
      d?: string;
      opacity?: number;
    };
    open: { d?: string; opacity?: number };
  };
  transition?: { duration: number };
  d?: string;
};

const Path = (props: PathProps) => {
  return (
    <motion.path
      className='fill-transparent stroke-3 stroke-neutral-900'
      strokeLinecap='round'
      {...props}
    />
  );
};

const NavToggle = ({ toggle }: { toggle: any }) => {
  return (
    <button
      onClick={(e) => toggle(e)}
      className='absolute top-[18px] right-[5%] w-12 h-12 rounded-[50%] bg-neutral-100'
    >
      <svg viewBox='0 0 100 100' className='w-full h-full'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default NavToggle;
