import { request } from "../utils/request";
import { appInfo } from "../appInfo";
//出库
async function exportReagent(
    id,
    date,
    name,
    operator,
    quantity
) {
    return request(`${appInfo.baseurl}/api/reagent`, {
        id,
        date,
        name,
        operator,
        quantity
    }, "POST");
}
//入库
async function importReagent(
    id,
    date,
    name,
    operator,
    quantity
) {
    return request(`${appInfo.baseurl}/api/record/import`, {
        id,
        date,
        name,
        operator,
        quantity
    }, "POST")
}

//试剂名查询
async function selectByName(name) {
    return request(`${appInfo.baseurl}/api/record`, { name }, "GET")
}
//综合查询
async function select(
    type,
    name,
    limit,
    page, [startTime, endTime],
    user
) {
    return request(`${appInfo.baseurl}/api/record/`, {
        type,
        name,
        limit,
        page,
        startTime,
        endTime,
        user
    }, "GET")
}
//获取审批操作
async function getApproval(
    limit, page
) {
    return request(`${appInfo.baseurl}/api/record/operation`, { limit, page }, "PUT")
}
//同意操作审批
async function giveApproval(
    id,
    agree
) {
    return request(`${appInfo.baseurl}/api/record/operation`, {
        id,
        agree
    }, "PUT")
}