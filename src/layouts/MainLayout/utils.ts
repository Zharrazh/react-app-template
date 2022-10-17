export const getSelectedMenuKey = (path: string) => {
  //Переписал бы если бы это имело смысл в рамках тестового задания
  if (path.startsWith('/trains')) {
    return 'trains';
  }
  if (path.startsWith('/map')) {
    return 'map';
  }
};
