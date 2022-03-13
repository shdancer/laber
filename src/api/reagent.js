import { request } from "../utils/request";
import { appInfo } from "../appInfo";

async function addReagent(
    name,
    brand,
    date,
    purity,
    capacity,
    location,
    type,
    control,
    solution,
    operation,
    limitation
) {
    return request(`${appInfo.baseurl}/api/reagent`, {
        name,
        brand,
        date,
        purity,
        capacity,
        location,
        type,
        control,
        solution,
        operation,
        limitation
    }, "POST");
}

async function deleteReagent(id) {
    return request(`${appInfo.baseurl}/api/reagent/${id}`, undefined, "DELETE");
}

//记录模块




export default {
    addReagent,
    deleteReagent
}