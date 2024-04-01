import { Paragraph, Icon } from '@library/kit';

import React from 'react';
import { Link } from 'react-router-dom';

import { Price } from './Price';

import cn from 'classnames';
import s from './default.module.scss';

interface IBrand {
  code: string;
  name: string;
}

interface ICurrency {
  code: string;
  value: string;
  description: string;
}

interface IPrice {
  price: number;
  prevPrice: number | null;
  description: string;
  currency: ICurrency;
}

export interface IProduct {
  uuid: string;
  title: string;
  brand: IBrand;
  prices: IPrice[];
}

interface IProps {
  product: IProduct;
}

export const Product: React.FC<IProps> = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={cn(s.name)}>
        <Paragraph>{props.product.title}</Paragraph>
      </div>
      <div className={s.brand}>
        <Paragraph>{props.product.brand.name}</Paragraph>
      </div>
      <div className={s.price}>
        <Price price={props.product.prices[0]} />
      </div>
      <Link className={s.link} to={import.meta.env.VITE_PUBLIC_URL + '/products/' + props.product.uuid}>
        <div className={s.control}>
          <Icon icon={'ellipsis'} />
        </div>
      </Link>
    </div>
  );
};
