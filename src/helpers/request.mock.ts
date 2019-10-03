import { AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"

export const setupMocks = (request: AxiosInstance) => {
  const mock = new MockAdapter(request)

  mock.onPost("/promotions/validate").reply(() => {
    const number = Math.floor(Math.random() * 10)
    const result = number === 3 ? 200 : 418
    console.table({
      request: "/promotions/validate",
      generated: number,
      accepting: 3,
      result: result,
    })
    return [result]
  })
}
