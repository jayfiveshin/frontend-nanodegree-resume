# JavaScript Basic Notes

## Object Syntax

__Dot Notation__

    object.property

__Bracket Notation__

    object["property"]

## JSON

Linting is a way of using a software to check for syntax errors.
www.jsonlint.com is where you can go to check your source code.
This is also called the object literal notation.

## Control flow

### Tip
You should never use ==, always use ===.
One is loose equality, the other is strict equality.

### Functions
There are two ways to do this.

__First way__

    var myFunc = function(param1, param2, ..., etc) {
      // code goes there
    }

When using the first way, only the name of the function is sent to the
top of the scope. The code inside the function is not sent to the top,
meaning if you run the function before declaring it, it will fail.

__Second way__

    function myFunc(param1, param2, ..., etc) {
      // code goes here
    }

When using the second way, both the name of the function AND its content is sent
to the top of the scope. This means that if you run the function before
declaring it, it will pass.

### Block-level Scope

What the hell is this?
Functions create their own scope.
If statements do not create their own scope.
