interface Tasks {
    defaults:{
        name:string,
        destination:string
    };
    register(gulp, plugins, options:{name:string, destination:string}):void;
}