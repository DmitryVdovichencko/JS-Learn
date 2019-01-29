
<img src="https://www.howtographql.com/static/howtographql.d1a2e5b4.svg" width="48" style="display:inline-block; float:left;"> 

# Основы GraphQL
## Что это и зачем тебе GraphQL?
GraphQL новый стандарт API (application programming interface — "программный интерфейс приложения"), который является более эффективной, мощной и гибкой альтернативой архитектуры REST (Representational State Transfer — "передача состояния представления").
GraphQL был разработан Facebook и является языком запросов для API.
API определяет каким образом клиент может получить данные с сервера.

Зачем был разработан GraphQL?

* Постоянный рост мобильного траффика :iphone: привел к необходимости эффективной загрузки данных.
> GraphQL минимизирует объем данных, которые нужно передать по сети и таким образом, улучшает использование приложений в условиях растущего мобильного траффика.

* Многообразие различных фронтэнд фреймворков и платформ
>  Огромное количество фронтэнд фреймворков и платформ которые управляют клиентскими приложениями делает достаточно трудоемким и сложным процессом создание и обслуживание одного API который будет удовлетворять всем требованиям. С GraphQL, каждый клиент может получить доступ к определенным данным, которые ему необходимы.

* Быстрая разработка и добавление новых возможностей
>  При использовании REST APIs, способ которым данные предоставляются сервером часто требуют модификации для соответствия специфическим требованиям и изменениям на стороне клиента.

## GraphQL лучше чем REST

### Сравнение получения данных с REST и GraphQL

При использовании REST API мы обычно собираем данные получая доступ к многочисленным конечным точкам.
Например, это может быть `/users/<id>` для доступа к данным пользователя. Потом нам понадобится обратиться к конечной точке `users/<id>/posts` , которая вернет все его посты. Ну и напоследок обратимся к `/users/<id>/followers` чтобы получить список подписчиков пользователя.

![REST fetching](https://i.imgur.com/VIWd5I5.png "Logo Title Text 1")

При использовании REST потребовалось три запроса для получения необходимой информации и, кстати, каждй раз мы получили немного лишних данных, которые мы не запрашивали.

С другой стороны, при использовании GraphQL, мы отправляем единственный запрос GraphQL серверу который включает в себя все требования для запрашиваемых данных. Сервер отправляет в ответ JSON объект где все требуемые поля уже заполнены.

![GraphQL fetching](https://i.imgur.com/uY50GHz.png "Logo Title Text 1")

### Итак больше никаких лишних данных и никакого недостатка при их получении :sweat_smile:. 

Одна из самых больших проблем REST архитектуры в том, что когда клиент загружает данные по ссылкам ему возвращаются фиксированные структуры данных, и довольно сложно разаработать API таким способом, чтобы клиенты получали только те данные, которые им необходимы.

### Загрузка излишних данных

Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users' names.
Underfetching and the n+1 problem

Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.

As an example, consider the same app would also need to display the last three followers per user. The API provides the additional endpoint /users/<user-id>/followers. In order to be able to display the required information, the app will have to make one request to the /users endpoint and then hit the /users/<user-id>/followers endpoint for each user.
Rapid Product Iterations on the Frontend

A common pattern with REST APIs is to structure the endpoints according to the views that you have inside your app. This is handy since it allows for the client to get all required information for a particular view by simply accessing the corresponding endpoint.

The major drawback of this approach is that it doesn’t allow for rapid iterations on the frontend. With every change that is made to the UI, there is a high risk that now there is more (or less) data required than before. Consequently, the backend needs to be adjusted as well to account for the new data needs. This kills productivity and notably slows down the ability to incorporate user feedback into a product.

With GraphQL, this problem is solved. Thanks to the flexible nature of GraphQL, changes on the client-side can be made without any extra work on the server. Since clients can specify their exact data requirements, no backend engineer needs to make adjustments when the design and data needs on the frontend change.
Insightful Analytics on the Backend

GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more.

With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.
Benefits of a Schema & Type System

GraphQL uses a strong type system to define the capabilities of an API. All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server to define how a client can access the data.

Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that's sent over the network.

Frontend teams can easily test their applications by mocking the required data structures. Once the server is ready, the switch can be flipped for the client apps to load the data from the actual API.
