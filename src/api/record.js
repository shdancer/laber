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
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent`,
    data: {
      id,
      date,
      name,
      operator,
      quantity
    },
    method: "POST"
  });
}
//入库
async function importReagent(
  id,
  date,
  name,
  operator,
  quantity
) {
  return uni.request({
    url: `${appInfo.baseurl}/api/record/import`,
    data: {
      id,
      date,
      name,
      operator,
      quantity
    },
    method: "POST"
  });
}

//试剂名查询
async function selectByName(name) {
  return request({
    url: `${appInfo.baseurl}/api/record`, data: { name }, method: "GET"
  });
}

//综合查询
async function selectAll(
  type,
  name,
  limit,
  page,
  startTime,
  endTime,
  user
) {
  return uni.request({
    url: `${appInfo.baseurl}/api/record`,
    data: {
      type,
      name,
      limit,
      page,
      startTime,
      endTime,
      user
    },
    method: "GET"
  });
}
//获取审批操作
async function getApproval(
  limit, page
) {
  return uni.request({
    url: `${appInfo.baseurl}/api/record/operation`,
    data: { limit, page },
    method: "PUT"
  });
}
//同意操作审批
async function giveApproval(
  id,
  agree
) {
  return uni.request({
    url: `${appInfo.baseurl}/api/record/operation`,
    data: {
      id,
      agree
    },
    method: "PUT"
  });
}

export default {
  exportReagent,
  importReagent,
  selectByName,
  selectAll,
  getApproval,
  giveApproval
}