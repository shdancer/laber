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
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent`,
    data: {
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
    },
    method: "POST"
  });
}

async function deleteReagent(id) {
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent/${id}`,
    method: "DELETE"
  });
}

async function changeReagent(
  id,
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
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent`,
    data: {
      id,
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
    },
    method: "PUT"
  });
}

async function getReagent(name, limit, page) {
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent`,
    data: { name, limit, page },
    method: "GET"
  });
}

async function limitation(limit, page) {
  return uni.request({
    url: `${appInfo.baseurl}/api/reagent/limitation`,
    data: { limit, page },
    method: "GET"
  });
}

export default {
  addReagent,
  deleteReagent,
  changeReagent,
  getReagent,
  limitation
};