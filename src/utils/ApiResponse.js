class ApiResponse{
    constructor(statusCode,data,message="Sucess",success){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode < 400 ;

    }
}