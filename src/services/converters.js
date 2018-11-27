export const convertArray = snapshot => {
  const array = [];
  snapshot.forEach(a => {
    array.push({
      id: a.key,
      ...a.val()
    });
  });
  return array;
};
