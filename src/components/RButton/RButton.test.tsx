import React from "react"
import { render } from "@testing-library/react"
import RButton from "./RButton"

describe("RButton", () => {
  test("renders RButton component", () => {
    render(<RButton buttonProps={{type:"button"}} >Button</RButton>)
  })
})
