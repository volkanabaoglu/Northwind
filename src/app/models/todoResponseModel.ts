import { ResponseModel } from "./responseModel";
import { Todo } from "./todo";

export interface TodoResponseModel extends ResponseModel{
    data:Todo[]
}