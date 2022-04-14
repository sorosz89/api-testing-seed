import { request } from "pactum";

beforeAll(() => request.setBaseUrl("http://httpbin.org"));
