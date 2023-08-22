
import { fireEvent, render, screen } from '@testing-library/react';
import Login from "./Login"

test("username input  should be rendered",()=>{
    render(<Login/>)
    const username = screen.getByPlaceholderText(/username/i)
    expect(username).toBeInTheDocument()
})

test("password input  should be rendered",()=>{
    render(<Login/>)
    const password = screen.getByPlaceholderText(/password/i)
    expect(password).toBeInTheDocument()
})

test("button should be rendered",()=>{
    render(<Login/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test("loader should not be rendered",()=>{
    render(<Login/>)
    const button = screen.getByRole('button')
    expect(button).not.toHaveTextContent(/Please wait/i)
})

test("username input  should be empty",()=>{
    render(<Login/>)
    const username = screen.getByPlaceholderText(/username/i)
    expect(username.value).toBe('')
})

test("password input  should be empty",()=>{
    render(<Login/>)
    const password = screen.getByPlaceholderText(/password/i)
    expect(password.value).toBe('')
})

test("button  should be disabled",()=>{
    render(<Login/>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
})

test("error message should not be visiable",()=>{
    render(<Login/>)
    const error = screen.getByTestId("error")
    expect(error).not.toBeVisible()
})

test("username input  should be change",()=>{
    render(<Login/>)
    const username = screen.getByPlaceholderText(/username/i)
    const testValue = 'test'
    fireEvent.change(username, {target : {value : testValue}})
    expect(username.value).toBe(testValue)
})

test("password input  should be change",()=>{
    render(<Login/>)
    const password = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'
    fireEvent.change(password,{target:{value: testValue}})
    expect(password.value).toBe(testValue)
})

test("button should not be disabled when input exist",()=>{
    render(<Login/>)
    const button = screen.getByRole('button')
    const username = screen.getByPlaceholderText(/username/i)
    const password = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'
    fireEvent.change(username,  {target : {value: testValue}})
    fireEvent.change(password,  {target : {value: testValue}})
    expect(button).not.toBeDisabled()
})

test("loader should be rendered when clickd",()=>{
    render(<Login/>)
    const button = screen.getByRole('button')
    const username = screen.getByPlaceholderText(/username/i)
    const password = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'
    fireEvent.change(username,  {target : {value: testValue}})
    fireEvent.change(password,  {target : {value: testValue}})
    fireEvent.click(button)
    expect(button).toHaveTextContent(/Please wait/i)
})