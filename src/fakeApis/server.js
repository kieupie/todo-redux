import { createServer } from "miragejs"

export const setupServer = () => {
    let server = createServer()

    //GET todo
    server.get("/api/todos", {
        todos: [[
            { id: 1, name: 'Learn Redux', completed: false, priority: 'Medium' },
            { id: 2, name: 'Learn Nodejs', completed: true, priority: 'High' },
            { id: 3, name: 'Learn MongoDB', completed: false, priority: 'Low' },
        ]]
    })


}