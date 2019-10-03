import axios from "axios"

import { setupMocks } from "./request.mock"

export const request = axios.create()

setupMocks(request)
