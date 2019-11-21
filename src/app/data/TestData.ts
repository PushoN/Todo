import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

export class TestData {

  static catigories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Еда'},
    {id: 6, title: 'Спорт'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Здоровье'},
    {id: 9, title: 'Гаджеты'},
    {id: 10, title: 'Ремонт'},
  ];

  static priorities: Priority[] = [
    {id : 1, title: 'Срочно', color: '#ff2643'},
    {id : 2, title: 'Очень срочно', color: '#F000FF'},
    {id : 3, title: 'Низкий', color: '#21fcff'},
    {id : 4, title: 'Высокий', color: '#34ff24'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Отложить 1000р',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.catigories[9],
      date: new Date('2019-04-20'),
    },
    {
      id: 2,
      title: 'Купить сыр',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.catigories[5],
      date: new Date('2019-05-10'),
    },
    {
      id: 3,
      title: 'Поговорить с мамой',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.catigories[1],
      date: new Date('2019-04-20'),
    },
    {
      id: 4,
      title: 'Встретиться с Димой',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.catigories[2],
      date: new Date('2019-05-20'),
    },
    {
      id: 5,
      title: '',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.catigories[3],
      date: new Date('2019-07-22'),
    },
  ];
}
