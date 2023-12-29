class ApiError extends Error{

    constructor(statusCode,message="smt went wrong",errors=[],stack=""){
        super(message);
        this.statusCode=statusCode;
        this.success=false;
        this.errors=errors;
        this.data=null;
        this.stack=stack;

        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }

}

export {ApiError}