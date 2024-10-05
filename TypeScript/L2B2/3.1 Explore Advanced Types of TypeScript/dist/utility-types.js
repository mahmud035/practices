"use strict";
{
    {
        //* ==================>>=======================>>===================>
        // IMPORTANT:
        //! NEED TO REMEMBER
        // 'Empty object' এর ক্ষেত্রে এইভাবে 'type define করা যায়'।
        // এটার মানে হলো 'object এর key গুলো always string হবে' এবং 'value গুলো যে কোন কিছু হতে পারে'। একারণে 'unknown' ব্যবহার করা হয়েছে।
        const emptyObj = {}; // Recommended
        const person1 = {
            name: 'Mr. X',
            age: 200,
            contactNo: '01900',
        };
        // person1.name = 'Mr. Y'; // Error: Cannot assign to 'name' because it it a read-only property
        console.log(person1);
        const obj1 = {
            a: 'aa',
            b: 'bb',
            c: 'cc',
            d: 'dd',
        };
        //* ==================>>=======================>>===================>
        // IMPORTANT:
        //! NEED TO REMEMBER
        // 'Empty object' এর ক্ষেত্রে এইভাবে 'type define করা যায়'।
        // এটার মানে হলো 'object এর key গুলো always string হবে' এবং 'value গুলো যে কোন কিছু হতে পারে'। একারণে 'unknown' ব্যবহার করা হয়েছে।
        const emptyObj2 = {};
        //* ==================>>=======================>>===================>
    }
}
