# Прототипы и наследование в JS :family:.

## Объекты в JS :gift:.

Оригинал статьи по которой написан конспект :pencil2: : [Understanding Prototypes and Inheritance in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

Каждый объект в JS имеет внутреннее свойство `[[Prototype]]`.

```javascript
let x = {};
// В таком виде мы обычно создаем объект 
// хотя можно воспользоваться и конструктором объектов let x = new Object()
```

Двойные квадратные скобки в которые заключено свойство `[[Prototype]]` говорят о том, что это внутреннее свойство и мы не можем получить к нему доступ напрямую из кода.:confounded:

Чтобы найти свойство `[[Prototype]]` вновь созданного объекта обратимся к методу `getPrototypeOf()`: :point_down:

```javascript
Object.getPrototypeOf(x);
```
Результат будет состоять из нескольких встроенных свойств и методов :information_desk_person:

```
Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
```
Другой способ найти свойство `[[Prototype]]` использовать свойство `__proto__`, которое представляет внутреннее свойство объекта `[[Prototype]]`.

Важно помнить, что `__proto__` - устаревшая возможность. Она не должна импользоваться в продакшен коде и не представлена в современных браузерах.

```javascript
x.__proto__;
```
Результат будет тот же что и при использовании метода `getPrototypeOf()`.

```
Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
```

:bookmark:__Важно помнить, что каждый объект в JavaScript имеет свойство `[[Prototype]]` т.к. это может помочь при создании двух или более объектов, связанных между собой.__ :grey_exclamation:

Объекты, которые мы создаем имеют свойство `[[Prototype]]`, также как и встроенные объекты, например `Date` или `Array`.
Ссылки от одного объекта к другому могут создаваться при помощи этого внутреннего свойства. :raised_hands:

## Прототипное наследование 

:mag: Когда мы пытаемся получить доступ к свойству или методу объекта JavaScript сначала ищет в самом объекте, и если ничего не найдено, поиск продолжится в свойстве объекта `[[Prototype]]`. Если ни поиск в самом объекте, ни поиск в свойстве `[[Prototype]]` не дали результатов, Javascript проверит линкованный объект и продолжит поиск до конца цепочки прототипов.

В конце цепочки нас ожидает `Object.prototype`. Все объекты наследуют свойства и методы `Object`. Любая попытка поискать за гранью конца цепочки прототипов приведет к `null`.

В нашем примере, `x` пустой объект который наследует свои свойства от Object. `x` может использовать любое свойство или метод `Object` например `toString()`.

```javascript
x.toString();
// Output
[object Object]
```

Эта цепочка прототипов содержит только одну ссылку: `x -> Object`. Мы это знаем, поскольку попытка поиска двух свойств `[[Prototype]]` приведет к `null`.

```javascript
x.__proto__.__proto__;
// Output
null
```

Посмотрим на другой тип объекта. Если у вас был опыт работы с массивами в JavaScript, вы знаете что они имеют много встроенных методов, например `pop()` и `push()`. Причина по которой у нас есть доступ к этим методам является то, что при создании нового массива, он получает доступ к свойствам и методам `Array.prototype` :sparkles:


```javascript
let y = [];
/* Помним что мы также можем создать массив с помощью конструктора, let y = new Array().
Посмотрим на [[Prototype]] нового массива и увидим свойства и методы унаследованные от, Array.prototype.*/

y.__proto__;
[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]
```
Можно заметить что свойство `constructor` указывает на  `Array()`. Свойство  `constructor` возвращает функцию конструктора объекта, этот механизм используется при создании объекта с помощью функций.

И раз уж цепочка прототипов в этот раз длиннее можно попробовать получить доступ к следующему прототипу по цепочке. Это будет выглядеть вроде: `y -> Array -> Object` :boom: .

```javascript
y.__proto__.__proto__;
// Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
```
Теперь эта цепочка будет ссылаться на `Object.prototype`. Мы можем проверить внутреннее свойство `[[Prototype]]` на равенство `prototype` конструкторов Array и Object.

```javascript
y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true
// для такой проверки можно использовать метод isPrototypeOf().
Array.prototype.isPrototypeOf(y);      // true
Object.prototype.isPrototypeOf(Array); // true
```

TL;DR, все JavaScript объекты имеют скрытое внутреннее свойство `[[Prototype]]` (которое может быть представлено свойством __proto__ в некоторых браузерах). Объекты могут расширяться и наследовать свойства и методы от `[[Prototype]]` их конструктора.

Эти прототипы могут соединяться по цепочке, и каждый дополнительный объект наслдует все по цепочке. Цепочка заканчивается `Object.prototype`.

## Конструкторы
Конструкторы это функции которые используются для создания новых объектов. Оператор `new` используется для создания новых экземпляров, основанных на функции конструктора. Мы уже знаем несколько встроенных JavaScript конструторов, таких как `new Array()` и `new Date()`, но мы также можем создавать собственные шаблоны для создания новых объектов.

As an example, let's say we are creating a very simple, text-based role-playing game. A user can select a character and then choose what character class they will have, such as warrior, healer, thief, and so on.

Since each character will share many characteristics, such as having a name, a level, and hit points, it makes sense to create a constructor as a template. However, since each character class may have vastly different abilities, we want to make sure each character only has access to their own abilities. Let's take a look at how we can accomplish this with prototype inheritance and constructors.

To begin, a constructor function is just a regular function. It becomes a constructor when it is called on by an instance with the new keyword. In JavaScript, we capitalize the first letter of a constructor function by convention.

characterSelect.js
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
We have created a constructor function called Hero with two parameters: name and level. Since every character will have a name and a level, it makes sense for each new character to have these properties. The this keyword will refer to the new instance that is created, so setting this.name to the name parameter ensures the new object will have a name property set.

Now we can create a new instance with new.

let hero1 = new Hero('Bjorn', 1);
If we console out hero1, we will see a new object has been created with the new properties set as expected.

Output
Hero {name: "Bjorn", level: 1}
Now if we get the [[Prototype]] of hero1, we will be able to see the constructor as Hero(). (Remember, this has the same input as hero1.__proto__, but is the proper method to use.)

Object.getPrototypeOf(hero1);
Output
constructor: ƒ Hero(name, level)
You may notice that we've only defined properties and not methods in the constructor. It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.

We can add a method to Hero using prototype. We'll create a greet() method.

characterSelect.js
...
// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}
Since greet() is in the prototype of Hero, and hero1 is an instance of Hero, the method is available to hero1.

hero1.greet();
Output
"Bjorn says hello."
If you inspect the [[Prototype]] of Hero, you will see greet() as an available option now.

This is good, but now we want to create character classes for the heroes to use. It wouldn't make sense to put all the abilities for every class into the Hero constructor, because different classes will have different abilities. We want to create new constructor functions, but we also want them to be connected to the original Hero.

We can use the call() method to copy over properties from one constructor into another constructor. Let's create a Warrior and a Healer constructor.

characterSelect.js
...
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}
Both new constructors now have the properties of Hero and a few unqiue ones. We'll add the attack() method to Warrior, and the heal() method to Healer.

characterSelect.js
...
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}
At this point, we'll create our characters with the two new character classes available.

characterSelect.js
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
hero1 is now recognized as a Warrior with the new properties.

Output
Warrior {name: "Bjorn", level: 1, weapon: "axe"}
We can use the new methods we set on the Warrior prototype.

hero1.attack();
Console
"Bjorn attacks with the axe."
But what happens if we try to use methods further down the prototype chain?

hero1.greet();
Output
Uncaught TypeError: hero1.greet is not a function
Prototype properties and methods are not automatically linked when you use call() to chain constructors. We will use Object.create() to link the prototypes, making sure to put it before any additional methods are created and added to the prototype.

characterSelect.js
...
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

// All other prototype methods added below
...
Now we can successfully use prototype methods from Hero on an instance of a Warrior or Healer.

hero1.greet();
Output
"Bjorn says hello."
Here is the full code for our character creation page.

characterSelect.js
// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
With this code we've created our Hero class with the base properties, created two character classes called Warrior and Healer from the original constructor, added methods to the prototypes and created individual character instances.

Conclusion
JavaScript is a prototype-based language, and functions differently than the traditional class-based paradigm that many other object-oriented languages use.

In this tutorial, we learned how prototypes work in JavaScript, and how to link object properties and methods via the hidden [[Prototype]] property that all objects share. We also learned how to create custom constructor functions and how prototype inheritance works to pass down property and method values.
