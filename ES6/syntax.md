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

# Деструктуризация

