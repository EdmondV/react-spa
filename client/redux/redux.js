import { createReducer, createActions } from 'reduxsauce';

import { importAll } from '../helpers/importAll';

const assets = importAll(
  require.context('../assets', false, /\.(png|jpe?g|svg)$/),
  '../assets',
);

const { Types, Creators } = createActions({
  addNews: ['news'],
  toggleCategory: ['category'],
});

export const RequestsTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem('/favorites')) || [],
  news: [
    {
      category: 'Спорт',
      file: 'bitmap_3',
      name: 'Name',
      src: assets['./bitmap_3@3x.jpg'],
      text: 'Дзюба стал «человеком года» по версии GQ',
      time: '01:50, 11 сентября 2018',
      id: Math.random().toString(36).substr(1, 12),
    },
    {
      category: 'Политика',
      file: 'bitmap_4',
      name: 'Name',
      src: assets['./bitmap_4@3x.jpg'],
      text: 'Япония отвергла предложение Путина о мире',
      time: '13:19, 12 сентября 2018 ',
      id: Math.random().toString(36).substr(1, 12),
    },
    {
      category: 'Спорт',
      file: 'bitmap-copy',
      name: 'Name',
      src: assets['./bitmap-copy@3x.jpg'],
      text: 'Виктор Ан обратился к болельщикам',
      time: '18:08, 12 сентября 2018',
      id: Math.random().toString(36).substr(1, 12),
    },
    {
      category: 'Политика',
      file: 'bitmap_4',
      name: 'Name',
      src: assets['./bitmap_4@3x.jpg'],
      text: 'Япония отвергла предложение Путина о мире',
      time: '13:19, 12 сентября 2018 ',
      id: Math.random().toString(36).substr(1, 12),
    },
    {
      category: 'Спорт',
      file: 'bitmap_3',
      name: 'Name',
      src: assets['./bitmap_3@3x.jpg'],
      text: 'Дзюба стал «человеком года» по версии GQ',
      time: '01:50, 11 сентября 2018',
      id: Math.random().toString(36).substr(1, 12),
    },
    {
      category: 'Спорт',
      file: 'bitmap-copy',
      name: 'Name',
      src: assets['./bitmap-copy@3x.jpg'],
      text: 'Виктор Ан обратился к болельщикам',
      time: '18:08, 12 сентября 2018',
      id: Math.random().toString(36).substr(1, 12),
    },
  ],
  globalNews: [
    [
      {
        text: 'Найдены виновные в обвале рубля',
        time: '14:23, 12 сентября 2018',
        views: 320,
        id: Math.random().toString(36).substr(1, 10),
      },
      {
        text: 'НАСА отреагировало на обвинения в продырявливании «Союза»',
        time: '16:23, 13 сентября 2018',
        views: 230,
        id: Math.random().toString(36).substr(1, 10),
      },
      {
        text: 'Меркель допустила атаку Германии на Сирию',
        time: '17:23, 14 сентября 2018',
        views: 400,
        id: Math.random().toString(36).substr(1, 10),
      },
    ],
    [
      {
        text: 'Ростовская пенсионерка убила мужа, сноху и 8-летнего внука из-за квартиры.',
        time: '14:23, 12 сентября 2018',
        views: 320,
        id: Math.random().toString(36).substr(1, 10),
      },
      {
        text: 'Писательницу посадили на 10 лет за роман про геев.',
        time: '16:23, 13 сентября 2018',
        views: 230,
        id: Math.random().toString(36).substr(1, 10),
      },
      {
        text: 'В Чикаго лифт с пассажирами рухнул с 95-го этажа.',
        time: '17:23, 14 сентября 2018',
        views: 400,
        id: Math.random().toString(36).substr(1, 10),
      },
    ]
  ],
  selectedCategory: 'Все',

}

export const addNews = (state, { news }) => {
  const oldNews = [ ...state.news ];
  oldNews.push(news);
  return { ...state, news: oldNews };
}

export const toggleCategory = (state, { category }) => {
  return { ...state, selectedCategory: category };
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NEWS]: addNews,
  [Types.TOGGLE_CATEGORY]: toggleCategory,
});
