import { NavLink } from 'react-router-dom';

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
      </ul>
    </div>
  );
};

export default navBar;
