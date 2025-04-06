"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleResponse(res) { }
handleResponse({ code: 200, data: { id: '1' } }); // ✅
handleResponse({ code: 400, message: 'Bad request' }); // ✅
