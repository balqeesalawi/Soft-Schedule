const ToDo = require('../models/todo')

exports.task_index_get = async (req, res) => {
    const tasks = await ToDo.find().populate('owner')
    res.render('tasks/index.ejs', {tasks})
}

exports.task_create_get = async (req, res)=> {
    res.redirect('/tasks')
}

exports.task_create_post = async (req, res)=> {
    req.body.owner = req.session.user._id
    if(req.body.isDone === 'on'){
        req.body.isDone = true
    } else {
        req.body.isDone = false
    }
    await ToDo.create(req.body)
    res.redirect('/tasks')
}

exports.task_show_get = async (req, res)=> {
    const task = await ToDo.findById(req.params.taskId)
    res.render('tasks/show.ejs', {task})
}


exports.task_edit_get = async (req, res)=> {
    const task = await ToDo.findById(req.params.taskId)
    res.render('tasks/edit.ejs', {task} )
}

exports.task_update_put = async (req,res)=> {
    if(req.body.isDone === "on"){
        req.body.isDone = true
    } else {
        req.body.isDone = false
    }

    const task = await ToDo.findByIdAndUpdate(req.params.taskId)
    task.set(req.body)
    await task.save()
    res.redirect(`/tasks`)
}


exports.task_delete = async (req, res)=> {
   await ToDo.findByIdAndDelete(req.params.taskId)
   res.redirect('/tasks') 
}
