import React from 'react';
import { NavLink } from 'react-router-dom';

import { Profile } from '../../../Profile';

import s from './default.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logotype}>
          <NavLink to={'/'}>
            <span className={s.logo} />
          </NavLink>
        </div>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};
