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
  return request(`${appInfo.baseurl}/api/reagent`, {
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
  }, "PUT");
}

async function getReagent(name, limit, page) {
  return request(`${appInfo.baseurl}/api/reagent`, { name, limit, page }, "GET");
}

async function limitation(limit, page) {
  return request(`${appInfo.baseurl}/api/reagent/limitation`, { limit, page }, "GET");
}

export default {
  addReagent,
  deleteReagent,
  changeReagent,
  getReagent,
  limitation
};