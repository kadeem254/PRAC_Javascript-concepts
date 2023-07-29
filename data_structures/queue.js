/**
 * QUEUE
 * 
 * A data structure that is used to access elements in a linear fashion.
 * The items are accessible using the principle of First In First Out.
 */

function Queue(){
  this.data = [];
  
  /**
   * Adds an element to the end of the queue.
   * @param {*} element - element to add
   * @returns 
   */
  this.enqueue = function( element ){
    this.data.push( element );
    return;
  }

  /**
   * Removes and returns the element at the start of the queue.
   * @returns element
   */
  this.dequeue = function(){
    return this.data.shift();
  }

  /**
   * Returns the value of the element at the start of the queue.
   * @returns element
   */
  this.front = function(){
    return this.data[0];
  }

  /**
   * Checks whether the queue contains any elements within it.
   * @returns boolean
   */
  this.isEmpty = function(){
    return 0 === this.data.length;
  }

  /**
   * Return the number of elements in the queue.
   * @returns integer
   */
  this.size = function(){
    return this.data.length;
  }
}