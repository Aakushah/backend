class ApiError extends Error{

    constructor(statusCode,message="smt went wrong",errors=[],statck=""){
        super(message);
        this.statusCode=statusCode;
        this.success=false;
        this.errors=errors;
        this.data=null;
        this.statck=statck;

        if(statck){
            this.statck=statck;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }

}

export {ApiError}