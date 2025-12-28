import React from 'react'
import { NextResponse } from 'next/server'
const middleware = (request) => {
  return (
    NextResponse.redirect(new URL("/login", request.url))
  )
}

export default middleware
export const config = {
    matcher:"/wallet/:path*",
}