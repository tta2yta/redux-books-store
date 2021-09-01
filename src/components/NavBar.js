import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const navBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Bookstore CMS',
    },
    {
      id: 2,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 3,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div className="navBar">
      <ul>
        {links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            activeClassName="active-link"
            className="nav-items"
            data-testid={item.text}
          >
            {item.text}
          </NavLink>
        ))}
        <Avatar className="avatar" />
      </ul>

    </div>
  );
};

export default navBar;
