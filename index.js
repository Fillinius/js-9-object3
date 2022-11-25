const handleObjects = (obj, key, action) => { // {name: "Vladimir", language: "JS"}, "language", "get"
  switch (action) { // "get" === "get" ?
      case 'get':
        return obj[key]; // тогда возвращаем значение ключа language - JS
      case 'add': // "add" === "add" ? нет, так как вызвали функцию с аргументом "get" - пропускаем
        obj[key] = '';
        return obj;
      case 'delete': // "delete" === "delete" ? нет, так как вызвали функцию с аргументом "get" - пропускаем
        delete obj[key];
        return obj;
      default: // если action не предали в функции, по умолчанию вернуть тот же обьект {name: "Vladimir", language: "JS"}
        return obj;
    }
  }
handleObjects({name: "Vladimir", language: "JS"}, "language", "get") // обраотка обьектов - первый параметр, сам объект(state - изначальное состояние) 2 аргумент - значение, которое хотим получить при оращении к ключу( key = language) 3 аргумент - действие, которое предаем как параметр функции, и в зависмости от него совершаем действия с нашим обьектом