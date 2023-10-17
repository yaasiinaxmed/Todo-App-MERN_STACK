import todoModel from "../models/todo.model.js"

export const getTodo = async (req, res) => {
    try {
        const todos = await todoModel.find()
        
        if(todos.length === 0) {
            return res.status(404).json({status: 404, message: "todos not found"})
        }

        res.json(todos)
    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong!", error: error.message})
    }
}

export const getTodoById = async (req, res) => {
    try {
        const {id} = req.params

        const todo = await todoModel.findById(id)

        if(!todo) {
            return res.status(404).json({status: 404, message: `todo ${id} not found`})
        }

        res.json(todo)
        
    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong!", error: error.message})
    }
}

export const createTodo = async (req, res) => {
    const {name} = req.body
    const newTodo = new todoModel({name})

    try {
        await newTodo.save()
        res.status(200).json({status: 200, message: "Todo created successfully"})
    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong!", error: error.message})
    }
}

export const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {isComplate} = req.body;

        const updatedTodo = await todoModel.findByIdAndUpdate(
            {_id: id},
            {
                isComplate: !isComplate,
            }
        )

        if(!updatedTodo) {
            return res.status(400).json({status: 400, message: "todo was not updated!"})
        }

        res.status(200).json({status: 200, message: "Todo updated successfully"})

    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong!", error: error.message})
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params

        const deletedTodo = await todoModel.findByIdAndDelete(id)

        if(!deletedTodo) {
            return res.status(404).json({status: 404, message: "Todo User not found"})
        }

        res.status(200).json({status: 200, message: "Todo deleted successfully"})
    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong!", error: error.message})
    }
}