"use strict";
// export {};
function handleResponse(res) { }
handleResponse({ code: 200, data: { id: '1' } }); // ✅
handleResponse({ code: 400, message: 'Bad request' }); // ✅
