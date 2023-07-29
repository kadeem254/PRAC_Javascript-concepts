/**
 * STACK
 * 
 * The stack is a data structure that holds items in a linear
 * manner, it follows the last in first out principle. This means
 * items are retrieved from the last entry to the first entry.
 * 
 * The methods that can be performed are:
 * Pop: Removes the last item from the stack and returns it.
 * Push: Adds an item to the end of the stack
 * Peek: Returns the value of the last stack entry.
 */

function Stack(){
  this.storage = {};
  this.count = 0;

  /**
   * Add an item to the stack
   * @param {*} value - item to add
   */
  this.push = function( value ){
    this.storage[this.count] = value;
    this.count++;
    return;
  }

  /**
   * Remove the last item in the stack and return it to the user
   */
  this.pop = function(){
    if( 0 === this.count ){
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  }

  /**
   * Returns the value of the last item entry into the stack
   */
  this.peek = function(){
    return this.storage[this.count - 1];
  }

  /**
   * Returns the current size of the stack
   */
  this.size = function(){
    return this.count;
  }

}