# Lampa plugin: remove "Content Restricted" LGBT block / Убрать блокировку «Контент ограничен» в Lampa

A tiny [Lampa](http://lampa.mx) plugin that stops Lampa from blocking films and series it thinks contain LGBT content. If Lampa shows you this screen, this plugin fixes it:

> **Контент ограничен**
> Просмотр недоступен в вашем регионе, так как возможно содержит ЛГБТ-контент. В некоторых странах такие материалы могут быть запрещены или ограничены.

> **Content Restricted**
> Viewing is unavailable in your region as it may contain LGBT content. Such material may be prohibited or restricted in some countries.

Works on Lampa for Android TV / Google TV, projectors (JMGO, etc.), Apple TV, WebOS, Tizen and in the browser: anywhere Lampa can load plugins.

## Install

1. Open Lampa → **Settings** → **Extensions** (Настройки → Расширения).
2. **Add plugin** (Добавить плагин) and enter:

   ```
   https://milording.github.io/lampa/lgbt.js
   ```

3. Restart Lampa.

To remove it, delete **LGBT unblock** from the extensions list.

## Why you see the block even outside Russia

Lampa blocks LGBT titles when the **"Block LGBT content"** setting is on **or** when it decides your region is Russia or Belarus:

```js
var lgbt_block = Storage.field('lgbt_content_block') || vpn.is(['ru', 'by']);
```

The region comes from a request to `geo.<cub mirror>`. If that request fails or returns an empty answer, Lampa falls back to `'ru'` (`responce_code = country || 'ru'`). So users in the Netherlands, Germany and elsewhere get the Russian block list (11,000+ titles) whenever the mirror misbehaves. On top of that, Lampa marks a title as blocked if its TMDB keywords match a built-in list (`gay`, `lesbian`, `lgbt`, …).

## How the plugin works

Both checks only run when Lampa's downloaded block list `window.lampa_settings.lgbt` exists. The plugin:

- turns on Lampa's own built-in switch `lampa_settings.disable_features.lgbt`,
- keeps `lampa_settings.lgbt` permanently empty, so neither the keyword check nor the block list can trigger,
- resets the `lgbt_content_block` setting to off.

It works whatever region Lampa detects. It doesn't change sources, accounts or anything else.

---

## Установка (RU)

Если Lampa пишет «Контент ограничен… возможно содержит ЛГБТ-контент», даже если вы не в России:

1. Lampa → **Настройки** → **Расширения** → **Добавить плагин**
2. Введите `https://milording.github.io/lampa/lgbt.js`
3. Перезапустите Lampa.

**Почему так происходит:** Lampa включает блокировку ЛГБТ, если считает ваш регион RU/BY. Регион определяется запросом к `geo.<зеркало CUB>`; если ответ пустой или запрос не прошёл, Lampa по умолчанию считает регион `ru`. Поэтому блокировка появляется и у пользователей в Европе. Плагин включает встроенный в Lampa переключатель `disable_features.lgbt` и держит список блокировки пустым, независимо от определённого региона.

Keywords: lampa plugin, lampa lgbt, lampa контент ограничен, лампа контент ограничен лгбт, lampa content restricted, lampa unblock, lampa плагин разблокировка, cub lgbt block.
