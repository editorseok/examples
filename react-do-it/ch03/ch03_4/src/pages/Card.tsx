import type { FC } from 'react';
import type { DivProps } from '../components';
import { Div, Icon } from '../components';
import * as D from '../data';
import User from './User';

export type CardProps = DivProps & {
  card: D.ICard;
};

const Card: FC<CardProps> = ({ card, ...props }) => {
  const { writer, image, title, paragraphs, dayMonthYearDate, relativeDate } =
    card;
  const icons = ['home', 'search', 'setting', 'favorite'].map(name => (
    <Icon key={name} name={name} className="mr-2 text-3xl" />
  ));

  return (
    <Div {...props}>
      <div className="flex flex-col">
        <Div src={image} className="h-60" />
        <Div className="p-4" minHeight="12rem" height="12rem" maxHeight="12rem">
          <p className="mt-2 text-3xl font-bold text-center">{title}</p>
          <Div className="flex justify-between">
            <User user={writer} className="mt-2" />
            <Div className="mt-2">
              <p className="text-gray-500">{relativeDate}</p>
              <p className="text-gray-500">{dayMonthYearDate}</p>
            </Div>
          </Div>
        </Div>
      </div>
    </Div>
  );
};

export default Card;
