// 10. Explore Dom Manipulation In Typescript

const submitBtn = document.getElementById('submit-btn');
const input = document.getElementById('input') as HTMLInputElement;
// console.log(submitBtn, input);

submitBtn?.addEventListener('click', (e) => {
  // console.log('clicked', input?.value);

  const target = e.target as HTMLElement;

  const p = document.createElement('p');
  p.innerText = input?.value;

  target?.parentNode?.appendChild(p);
});
