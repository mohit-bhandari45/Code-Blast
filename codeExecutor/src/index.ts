import { RedisManager } from "./RedisManager";
import { testCaseInput, submitInput } from "./types/toExecutor";
type dataType = testCaseInput | submitInput;
const data: dataType = RedisManager.getInstance().rPop();

let url = "http://localhost:2358/";
