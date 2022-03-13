import { request } from "../utils/request";
import { appInfo } from "../appInfo";

async function login(stuid, password) {
  return uni.request({ url: `${appInfo.baseurl}/api/user`, data: { stuid, password }, method: "POST" });
}

async function logout() {
  return uni.request({ url: `${appInfo.baseurl}/api/user`, method: "DELETE" });
}

async function register(name, stuid, password) {
  return uni.request({ url: `${appInfo.baseurl}/api/user/register`, data: { name, stuid, password }, method: "POST" });
}

async function approve(id, agree) {
  return uni.request({ url: `${appInfo.baseurl}/api/user/approve`, data: { id, agree }, method: "PUT" });
}

async function getApprove(limit, page) {
  return uni.request({ url: `${appInfo.baseurl}/api/user/approve`, method: "GET" });
}

async function cancel(id) {
  return uni.request({ url: `${appInfo.baseurl}/api/user/cancel/${id}`, method: "DELETE" });
}

export default {
  login,
  logout,
  register,
  approve,
  getApprove,
  cancel
};