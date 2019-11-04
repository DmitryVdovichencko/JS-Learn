# Синтаксис в ES6

## Объявление переменных

### Что нового

Теперь, можно создать объявление переменной связанной с определенным блоком кода.

Объявлять лучше в начале блока, чтобы избежать обращения к переменной до ее объявления.

```javascript

{ /* Don't try to call me, before I appear, it works with var, not with me.
  If you try, you've got reference error, boom!*/ 
  console.log(varFromTheBlock);
  // ReferenceError: can't access lexical declaration `varFromTheBlock' before initialization
  let varFromTheBlock = "Hey I'm Var from the Block, don't mess with me out from this block";
  // Cause you got reference error, dude, you don't want it.
  console.log(varFromTheBlock);// "Hey I'm Var from the Block, don't mess with me out from this block"
 }
  console.log(varFromTheBlock); //ReferenceError: varFromTheBlock is not defined
```
Если нужна переменная с постоянным, неизменяемым значением, пользуемся `const`.
Инициализация обязательна, если надо `undefined` указываем `undefined`.


```javascript
{
  const notForChange = 1;
  console.log( notForChange );
  //  Don't try to change me, dude, cause you've got type error!
  notForChange = 2; //TypeError
  // I told you!
}
```

### Хитрости

При объявлении в цикле в виде `let i` мы создаем переменную i на каждой итерации.
Если в примере используется var получим `5` т.к. будем замыкаться на внешнюю переменную которая в итоге окажется равна `5`

```javascript
  var arrForIteration = [];
  for (let i = 0; i < 5; i++){
    arrForIteration.push( function(){
      console.log( i );
    } );
  }
  arrForIteration[3]();//3 
```
Если `const` ссылается на массив или объект то их можно модифицировать


```javascript
{
  const bigConst = ['cars','weapons'];
 // Hey I'm bigConst and I work for some huge array.
 bigConst.push('cash');
 // Yes I can talk with array if you want and bring him some 'cash' 
 console.log( bigConst ); // ['cars','weapons','cash']
  //  But don't try to broke my powerful connections with guys, which I'm working for!
  bigConst = 'plant'; //TypeError
  // I told you! It's typeError, man.
}
```
# Spread и Rest

`...` может иcпользоваться как оператор `spread` или `rest`

__По отношению к массиву__

__1. разделяем массив__

```javascript
console.log(...[1,2,3]);// 1 2 3
```
__2. объединяем массивы__

```javascript
let a = [3,4,5], b = [1,2, ...a]
console.log(b);// [1,2,3,4,5]
```
__3. собираем набор значений в массив__

Например если оставшуюся часть аргументов нужно собрать в массив.

```javascript
funcion foo(x,y, ...z) {
  console.log( x, y, z );
}
foo(1,2,3,4,5); // 1 2 [3,4,5]
```

# Параметры по умолчанию

В ES6 есть возможность указывать параметры функции по умолчанию. В случае пропуска аргуметов или указания undefined будут использованы значения по умолчанию.

```javascript
function divide(x=1, y=1){
  return x/y;
}
```

# Деструктуризация

### Структурированное присваивание

Значения массива или свойств объекта присваиваются переменным вручную. Пример того, как это происходит:

```javascript
function creatingArr(){
  return [1,2,3];
}
// Функция возвращает массив.

let tmp = creatingArr();
// Добавляем переменную и присваеваем ей массив который вернет функция

let a = tmp[0], b = tmp[1], c = tmp[2];
// Вручную создаем переменные, которым присвоим значения массива

```

### Деструктурирующее присваивание


```javascript
// создаем массив
function creatingArr(){
  return [1,2,3];
}
// присваеваем значения для массива
let [a,b,c] = creatingArr();

// Создаем объект 
function creatingObj(){
  return{
  x:4,
  y:5,
  z:6
  };
}
// Присваеваем значния свойств объекта
let {x:x,y:y,z:z} = creatingObj(); 
```
Если переменная создается с тем же именем что и свойство объекта - можем сократить запись

```javascript
let {x,y,z} = creatingObj();
```
Главная особенность такого шаблона: `source:target` инвертируется в `target-->source`

И если нам нужны другие названия свойств объекта:

```javascript
let {x: myNewProp,y: awesomeProp,z: anotherCoolProp} = creatingObj();
```

И раз уж мы перевернули шаблон `source:target` в `target-->source` то `x,y,z` - значения, а `myNewProp, awesomeProp, anotherCoolProp` - имена свойств.

Если нужно присвоить значения без объявления переменных используем тот же шаблон только для объектов обернем выражение в круглые скобки чтобы JS не принял объект слева за блок кода.


```javascript
// присваеваем значения для массива
[a,b,c] = creatingArr();

// Присваеваем значния свойств объекта
( {x:x,y:y,z:z} = creatingObj() ); 
```

