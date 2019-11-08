# Покоряем управление навигацией с React-router и Redux :rocket:

Основной компонент общий для традиционных приложений и SPA это навигация от одной страницы к другой.

В этой статье мы рассмотрим как собрать навигацию для React/Redux приложений и посмотрим как поддерживать состояние при переходах по навигации.

## Приложение с которым мы собираемся работать

Чтобы разобраться с навигацией я создал небольшое простое приложение EmojiLand



EmojiLand простое приложение, но достаточно хорошее, чтобы переварить те мысли, которыми я поделюсь в этой статье.

Заметьте, что приложение остается на выбранном маршруте, но, когда будет нажата кнопка, оно выполнит какой-то фальшивый `action` и, по его завершении перейдет на другой маршрут.

В реальном мире, это фальшивое действие может быть запросом на какой-нибудь ресурс или любое другое асинхронное действие.

## Краткий обзор EmojiLand

Клонируем репозиторий с GitHub

`git clone https://github.com/ohansemmanuel/nav-state-react-router.git`

Переходим в директорию репозитория: 

`cd nav-state-react-router`

Устанавливаем зависимости: 

`yarn install`
или
`npm install`

Запускаем приложение:

`yarn start` 
или 
`npm start`

Приложение построено на базе `react` и `redux` а также `react-router`

В `containers/App.js` вы найдете 6 маршрутов этого приложения.

```javascript
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AngryDude} />
      <Route path="/quiet" component={KeepQuiet} />
      <Route path="/smile" component={SmileLady} />
      <Route path="/think" component={ThinkHard} />
      <Route path="/thumbs" component={ThumbsUp} />
      <Route path="/excited" component={BeExcited} />
    </Switch>
  </Router>
);
```
Каждый маршрут ведет к emoji компоненту. `/quiet` например отобразит компонент `KeepQuiet`.

А вот как выглядит компонент `KeepQuiet`:

```javascript
import React from "react";
import EmojiLand from "../components/EmojiLand";
import keepQuietImg from "../Images/keepquiet.png";
import emojiLand from "./emojiLand";
const KeepQuiet = ({ appState, handleEmojiAction }) => (
    <EmojiLand
      EmojiBg="linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"
      EmojiImg={keepQuietImg}
      EmojiBtnText="Keep Calm and Stay Quiet."
      HandleEmojiAction={handleEmojiAction}
      appState={appState}
    />
  );
export default emojiLand(KeepQuiet);
```

Это простой функциональный компонент который отображает EmojiLand компонент

Важно то, что EmojiLand принимает несколько свойств таких как фоновый градиент, изображение, и текст кнопки

Более деликатным является экспортируемый компонент

```javascript
export default emojiLand(KeepQuiet);
```

`emojiLand` здесь это компонент высокого порядка. Все что он делает, это когда вы кликаете на кнопку любого из emoji компонентов, симулируется фейковое действие на 1000мс, на практике это может быть сетевой запрос.

`emojiLand` компонент высшего порядка делает это передачей свойств `appState` emoji компонентам. В нашем случае, `KeepQuiet`



Когда любой из компонентов `emoji` впервые отрендерится, `appState` пустая строка, `""`. После `1000мс`, `appState` изменится на `DO_SOMETHING_OVER`

`DO_SOMETHING_OVER` представлено как константа:

В `constants/action-types`:

```javascript
export const DO_SOMETHING_OVER = "DO_SOMETHING_OVER";
```
Примерно так работает каждый `emoji` компонент в этом приложении.
Также помните, что каждый маршрут это отдельный рендеринг EmojiLand компонента


