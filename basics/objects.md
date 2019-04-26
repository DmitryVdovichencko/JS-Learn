# Работаем с объектами в JS

Объекты в JS могут использоваться как ассоциативные массивы для хранения данных. В этом случае мы храним пары ключ-значение.

Объявляем объекты либо с помощью присваивания переменной пустых фигурных скобок `{}` либо с помощью конструкции `new Object()`. 

Для работы с объектами нужно иметь возможность добавлять и удалять свойства, __и да, все названия свойств объекта являются строками:__

```javascript
// Create new objects: laptop and playstation 
let laptop = {};
let playstation = new Object();

// create properties for our new objects
laptop.company = "apple";
laptop.ram = "8gb";
laptop.usb = "4";
// oops in new model we haven't usb ports anymore. So, let's delete it.
delete laptop.usb;
// get access to our properties
console.log(laptop.company, laptop["ram"]);

```
