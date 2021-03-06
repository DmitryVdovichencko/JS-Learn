# Базы данных :page_facing_up: :mag_right:

## SQL. Общие сведения.

__Реляционная база данных__ - это связанная информация представленная в виде двухмерных таблиц.

* Порядок строк произволен. Строка - __запись__ таблицы.

* Для идентификации строк используется первичный ключ. Столбец содержащий уникальные идентификаторы каждой строки таблицы - __первичный ключ таблицы__

* Столбцы таблицы - __поля__ __`fields`__ упорядочены и пронумерованы

__SQL__ - язык, ориентированный на реляционные базы данных.

### Подразделы SQL

* __`DDL`__ - Data Definition Language - язык определения данных(схемы) (Schema Definition Language) 

> Состоит из команд, создающих объекты (таблицы, индексы, представления)

* __`DML`__ - Data Manipulation Language - язык манипулирования данными

> Определяет какие данные представлены в таблице в любой момент времени.

* __`DCL`__ - Data Control Language - язык управления данными

> Определяет может ли пользователь выполнить отдельное действие.

### Типы данных SQL

В __`SQL`__ каждому полю приписывается тип данных

Для чисел:

* __`INTEGER`__(__`INT`__) - целые числа

* __`DECIMAL`__ (__`DEC`__) - разоешает использование десятичных дробей

Для текста:

* __`CHAR`__(__`CHARACTER`__) - текст с фиксированным числом символов

* __`VARCHAR`__ - текстовая строка любой длины память под нее выделяется по мере необходимости

### Пользователи SQL

В `SQL` действия приписываются пользователю `USER` с определенным `ID`

* Таблица принадлежит тому пользователю который имеет на нее полномочия

* Пользователь может иметь привелегию работы с объектами, которые ему не принадлежат

### Терминология SQL

__Ключевые слова__ - слова со специальным значением для SQL - они являются __инструкциями__ и выделяются заглавными буквами

`SELECT`

* __Команды (commands) или сообщения (statements)__ - инструкции для базы данных `SQL`

  * __Предложения (clauses)__
  > __`FROM Salespeople`__ и __`WHERE city='London'`__
  >__`FROM`__ и __`WHERE`__ - ключевые слова
  >__`Salespeople`__ и __`city='London'`__ - аргументы
  
 ## Выбираем данные из таблиц с SQL
 
 ### Запрос данных
  
Пример:

```sql
SELECT snum, sname, city, comm
FROM Salespeople;
```

`SELECT` - ключевое слово, с помощью него делаем запрос к базе данных

`snum, sname, city, comm` - имена столбцов, которые должны быть представлены в результате
`*` - используем если нужен полный список столбцов

`FROM Salespeople` - ключевое слово которое указывает из какой таблицы берем данные

### Удаление дубликатов с `DISTINCT`

Для удаления дублирующихся значений используем аргумент `DISTINCT` после `SELECT`

### Фильтруем данные  с `WHERE`

Для определения выборки указываем ключевое слово `WHERE` затем столбец для фильтрации - `city` и условие `='London'`

```sql
SELECT sname, city
FROM Salespeople
WHERE city
= 'London';
```

Для создания более сложных условий можно использовать операторы сравнения

>__`=`__ Равно

>__`>`__  Больше, чем

>__`<`__  Меньше, чем

>__`>=`__  Больше или равно

>__`<=`__  Меньше или равно

>__`<>`__  Неравно

И булевые операторы `AND` `OR` `NOT`
  

