/**
 * 指令类
 */
export  class DirectiveType {
    /**
     * 指令类型名
     */
    public name:string;
    
    /**
     * 优先级，越小优先级越高
     */
    public prio:number;

    /**
     * 编译时执行方法
     */
    public init:Function;

    /**
     * 渲染时执行方法
     */
    public handle:Function;
    
    /**
     * 构造方法
     * @param name      指令类型名       
     * @param prio      类型优先级
     * @param init      编译时执行方法
     * @param handle    渲染时执行方法
     */ 
    constructor(name:string, prio?:number,init?:Function,handle?:Function) {
        this.name = name;
        this.prio = prio>=0?prio:10;
        this.init = init;
        this.handle = handle;
    }
}
