import { createServer, Model } from "miragejs"

export const setupServer = () => {
    let server = createServer(
        {
            models: {
                todos: Model
            },

            routes() {
                //GET todo
                this.get('/api/todos', (schema) => {
                    return schema.todos.all();
                });

                //POST add todo
                this.post('/api/todos', (schema, request) => {
                    const payload = JSON.parse(request.requestBody);

                    return schema.todos.create(payload);
                });

                //POST update todo
                this.post('/api/updateTodos', (schema, request) => {
                    const payload = JSON.parse(request.requestBody);
                    const currentTodo = schema.todos.find(payload.id);

                    currentTodo.update(payload);
                })
            }
        }
    )
}