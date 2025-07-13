"use strict";
{
    const k = { x: 'x', 1: 'b' };
    // IMPORTANT: Please note that JavaScript automatically converts an index with number to an index with string so `k[1]` or `k["1"]` return the same value.
    console.log(k[1]); // b
    console.log(k['1']); // b
}
