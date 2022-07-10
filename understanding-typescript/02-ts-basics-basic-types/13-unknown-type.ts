/*

unknown type
------------

You can store any type inside unknown, unknown is a bit more restrictive, meaning that, if you don't know what the user might give always use unknown, any means typescript will just stop giving a damn. So, with using unknown you have to do type-checking, unknown is better than any.

*/

let number1: unknown;
// means number1's type is not known

let number2: any;
// meaning number2's type can be anything, typescript will don't give a damn

number1 = "Raaj";
number2 = "Raaj";

let firstName: string;
firstName = number1; // error, number1's type is never fully known
firstName = number2; // not an error because any means, TS won't do anything.
