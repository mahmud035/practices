export function getImageUrl(person, size = 's') {
  return (
    'https://react.dev/images/docs/scientists/' + person.imageId + size + '.jpg'
  );
}

export function getImageUrlTwo(person) {
  return 'https://react.dev/images/docs/scientists/' + person.imageId + 's.jpg';
}
