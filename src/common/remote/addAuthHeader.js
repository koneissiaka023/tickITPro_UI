import { tickITProClient } from "./tickitpro-client";

export default function addAuthToken() {
    tickITProClient.defaults.headers.common.authorization = window.localStorage.getItem("token");
}