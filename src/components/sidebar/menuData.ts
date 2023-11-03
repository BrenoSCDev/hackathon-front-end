import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    name: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    // // icon: <IoIcons.IoIosPaper />,
    name: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    // // icon: <FaIcons.FaCartPlus />,
    name: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    // // icon: <IoIcons.IoMdPeople />,
    name: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    name: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />,
    name: 'nav-text'
  }
];