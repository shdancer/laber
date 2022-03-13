import { request } from "../utils/request";
import { appInfo } from "../appInfo";

async function login(stuid, password) {
  return request(`${appInfo.baseurl}/api/user`, { stuid, password }, "POST");
}

async function logout() {
  return request(`${appInfo.baseurl}/api/user`, undefined, "DELETE");
}

async function register(name, stuid, password) {
  return request(`${appInfo.baseurl}/api/user/register`, { name, stuid, password }, "POST");
}

async function approve(id, agree) {
  return request(`${appInfo.baseurl}/api/user/approve`, { id, agree }, "PUT");
}

async function getApprove(limit, page) {
  return request(`${appInfo.baseurl}/api/user/approve`, undefined, "GET");
}

async function cancel(id) {
  return request(`${appInfo.baseurl}/api/user/cancel/${id}`, undefined, "DELETE");
}

export default {
  login,
  logout,
  register,
  approve,
  getApprove,
  cancel
};