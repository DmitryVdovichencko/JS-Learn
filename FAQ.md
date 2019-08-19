# FAQ JS.

## Types. Coercion. Типы данных. Преобразование.

### Операторы в JS

#### Сложение `+`

Операции выполняются слева направо. Если `+` унарный то сначала выполняется он, потом все остальное.

Унарный `+` преобразует в число.

Если хотя бы один из операндов является строкой, второй также будет преобразован к строке.

#### Остаток от деления `%`

#### Возведение в степень `**`

#### Оператор `,` отбрасывает все результаты выражения кроме последнего.



### Примитивные типы данных.

#### Строки. String.

Строки примитивный тип. Они неизменяемы. Методы строки не изменяют ее по месту а создают новую и возвращают ее.
Есть обычные строки и шаблонные строки. В шаблонные строки можно включать переменные.


```javascript

	const str = "Hi! I'm string";
	// инвертируем строку
	const strRev = str
	// разбиваем строку на массив символов
	.split( "" )
	// реверсируем массив символов
	.reverse()
	// объединяем массив символов обратно в строку
	.join( "" );
	console.log(strRev); 
	// шаблонные строки
	const megaStr = `Hi I'm megastring. Look what I can: boom, here is your var - ${strRev}`;
	console.log(megaStr);

```

__Методы строк__

Длина строки - `"myString".length`

Символ строки по индексу - `.charAt(0)`

Получаем подстроку - `.substring(indexA, indexB)`

Получаем подстроку - `.slice(-10) //последние 10 символов`

Получаем подстроку указывая начальный индекс и количество сиволов - `.substr(0,4) `

__Управляющие последовательности__

Перевод строки - `\n`

Табуляция - `\t`

Экранирование кавычек - `\"`

### Сложные структуры данных

#### Arrays

#### Objects

#### Map & Set

Map - коллекция ключ-значение, как объект. Разница в том, что есть возможность использовать ключи любого вида.

__Методы и свойства__

new Map() – создаёт коллекцию.

map.set(key, value) – записывает по ключу key значение value.

map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.

map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.

map.delete(key) – удаляет элемент по ключу key.

map.clear() – очищает коллекцию от всех элементов.

map.size – возвращает текущее количество элементов.

В качестве ключей в Map можно использовать даже объекты.

__Перебираем Map:__

map.keys() – возвращает итерируемый объект по ключам

map.values() – возвращает итерируемый объект по значениям

map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

__Set__

Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

Его основные методы это:

`new Set(iterable)` – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.

`set.add(value)` – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.

`set.delete(value)` – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.

`set.has(value)` – возвращает true, если значение присутствует в множестве, иначе false.

`set.clear()` – удаляет все имеющиеся значения.

`set.size` – возвращает количество элементов в множестве.

#### Date & Time

<hr>

## Scopes & Closures. Области видимости и замыкания.

### Объявление переменных и функций в JS

Переменные создаются при объявлении с помощью `var` `let` и `const`. 

```javascript

	let sayHi;
	sayHi="Hi";
	

```

При объявлении переменной с помощью `let`:

1. Лексическое окружение пустое

2. Объявляется переменная `let sayHi`, т.к. ей пока не присвоено значение, она инициализируется значением `undefined`

3. Присваевается значение `Hi`



### Область видимости (Scope) в JS

Создать функцию можно с помощью Function Declaration или Function Expression.

Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться. Аналогично себя ведут функции-стрелки.

Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).

В JS у каждой функции есть свое лексическое окружение. Там хранятся локальные переменные и ссылка на внешнее окружение.
При каждом вызове функции создается свое лексическое окружение. 

Скрытое свойство указывающее на место создания функции - `[[Environment]]`


### Замыкания

Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ. 
В JavaScript, все функции изначально являются замыканиями.

То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства `[[Environment]]` и все они могут получить доступ к внешним переменным.


__Исключение__

Когда функция создаётся с использованием new Function, в её `[[Environment]]` записывается ссылка не на внешнее лексическое окружение, в котором она была создана, а на глобальное. Поэтому, такая функция имеет доступ только к глобальным переменным.


<hr>

## This. Контекст выполнения.

Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение this и прочую служебную информацию.


Механизм `this` помогает передать ссылку на объект, что ведет к более чистому коду и простому многократному использованию функций.

__4 правила привязки this__:

1. Стандартная привязка `this`.

_Применение:_ 

В случае отдельного вызова функции. Общий случай когда остальные правила не работают. В режиме `"use strict"` эта привязка не работает.

_Объект на который указывает `this`_: 

`this` будет указывать на то место, где вызвана функция (в  случае глобальной области видимости - объект `global`)

***


2. Неявная привязка `this`.

_Применение:_ 

Когда функция вызывается в контексте объекта созданного или уже существующего.Сначала функция объявляется а затем в свойство объекта добавляется ссылка на эту функцию.

_Объект на который указывает `this`_: 

`this` будет указывать на тот объект, в контексте которого вызвана функция.

_Замечания:_

* Если имеет место цепочка из двух объектов `this` укажет на последний
* Утеря неявной привязки происходит если: 
1. Несмотря на объявление в объекте, функция будет вызвана в глобальной области видимости. А значит, она будет запрашивать переменные из глобальной области.
2. В случае передачи колбэка функции.

***

3. Явная привязка
С неявной привязкой мы должны менять объект в том плане, что необходимо включить ссылку на саму функцию в объект и использовать это свойство-ссылку на функцию, чтобы привязать this к объекту.
Но что 

_Применение:_ 

Если нам нужно сделать привязку без назначения свойства, ссылающегося на функцию. Для этого есть методы call(..) и apply(..). Вот как они работают. Оба метода принимают параметром объект, который будет использоваться как this. И затем, вызывают эту функцию уже с определенным this.


_Объект на который указывает `this`_: 

`this` будет указывать на тот объект, для которого вызваны методы `call` или `apply`.

_Замечания:_

Не решает проблем с потерей привязки.

***


4. Привязка с помощью конструктора `new`

_Применение:_

В JS конструкторы - это функции, которые вызываются с оператором new перед ними.
Что происходит при вызове конструктора:
1. Из воздуха создается новый объект
2. Вновь созданный объект получает ссылку на `[[Prototype]]`
3. Этот объект привязан к `this` для того вызова функции 
4. До тех пор, пока функция не возвращает свой альтернативный объект, вызов функции с `new` автоматически вернет вновь созданный объект.

<hr>


## Objects & Prototypes. Работаем с объектами. Прототипирование и классы.



## Async in JS. Асинхронность в JS.

## DOM, events, JSONP, CORS, AJAX, fetch. Работаем в браузере.




## React.

## Redux.

## Instruments: npm, yarn, webpack.

## Data structures & algorythms.

## Patterns.



