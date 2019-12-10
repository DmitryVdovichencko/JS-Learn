# My Postgres.MD
## Запрашиваем данные `SELECT`


### Сортируем в конце `SELECT * from table`

__`ORDER BY`__ - сортировка по умолчанию (возрастанию)

__`ORDER BY DESC`__ - сортировка по убыванию

__`ORDER BY ASC`__ - сортировка по возрастанию

Если после `ORDER BY` две колонки то сначала сортируем по первой, затем, если в первой колонке есть одинаковые строки __`=>`__ сортируем вторую колонку в указанном порядке.

### Убираем дубликаты `SELECT DISTINCT`

Убираем дубликаты по одному столбцу:

```sql
SELECT
   DISTINCT column_1
FROM
   table_name;
```
Убираем дубликаты по одному столбцу но запрашиваем другие столбцы

```sql
SELECT
   DISTINCT ON (column_1) column_alias,
   column_2
FROM
   table_name
ORDER BY
   column_1,
   column_2;
 ```
