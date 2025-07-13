"use strict";
// 10. Explore Dom Manipulation In Typescript
var submitBtn = document.getElementById('submit-btn');
var input = document.getElementById('input');
// console.log(submitBtn, input);
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', function (e) {
    // console.log('clicked', input?.value);
    var _a;
    var target = e.target;
    var p = document.createElement('p');
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
});
