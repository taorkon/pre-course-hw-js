let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

const len = rule.length;

switch (true) {
    case len < 25:
      console.log('Все таки нет правил без исключения');
      break;
    case len > 25:
      console.log('У меня 100 пудов все получится'); 
      break;
      case len == 25:
      console.log('50 на 50');
      break;
  }