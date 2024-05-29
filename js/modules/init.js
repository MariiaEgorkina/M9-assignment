export async function fetchEmployees () {
    try {
const respone  = await fetch('/data/employees.json')
const users = await respone.json()
return users
    } catch (error) {
            console.error(error)
    }
    }
