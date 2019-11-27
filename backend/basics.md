# HTTP протокол :book: :page_with_curl: :mag:

## HTTP протокол. Общие сведения.

__`HTTP`__ означает __Hypertext Transfer Protocol__

__`HTTP`__ позволяет общаться системам с различной архитектурой и конфигурацией сети. Протокол предъявляет самые общие требования к системам и не сохраняет состояние между обменами различными сообщениями. 

По этой причине HTTP считается протоколом __без запоминания состояния.__

Для транспортировки сообщений обычно служит протокол __`TCP`__. Портом по умолчанию для `HTTP` является порт __80__, но могут использоваться и другие порты.

Обмен сообщениями между клиентом и сервером идет по схеме __`запрос-ответ`__. Клиент начинает общение, отправляя сообщение запроса HTTP, в ответ на которое сервер отсылает сообщение ответа __`HTTP`__.

С версией протокола __`HTTP/1.1`__ есть преимущества:

* __Долговременные соединения__ __`persistent connections`__ :watch: :globe_with_meridians:

> Передача в одном TCP-соединении нескольких объектов, причем время существования соединения определяется при конфигурировании веб-службы

* __Кодирование передачи данных по частям__ __`chunked transfer-coding`__ 

> Доставляем данные без необходимости заранее знать точный размер всего тела HTTP-сообщения. Окончание передачи сообщения определяется наличием последней части с нулевой длиной. Такой механизм позволяет передать динамически сформированные объекты, для которых нельзя заранее определить размер.

## URL адрес 

![Url structure](https://sitechecker.pro/wp-content/uploads/2017/12/url-structure.jpg)