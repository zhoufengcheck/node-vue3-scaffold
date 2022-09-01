// 1创建一个中央时间总线类  
class Bus {  
    constructor() {  
      this.callbacks = {};   // 存放事件的名字  
    }  
    $on(name, fn) {  
      this.callbacks[name] = this.callbacks[name] || [];  
      this.callbacks[name].push(fn);  
    }  
    $emit(name, ...args) {  
      if (this.callbacks[name]) {  
        this.callbacks[name].forEach((cb) => cb.apply(null,args));  
      }  
    }  
} 
export default new Bus()