/**
 * STACK
 * 
 * A data structure that is used to access entries in a linear manner.
 * It utilizes the princile of Last In First Out.
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