let http = require("http");
let url = require("url");
let fs = require("fs");

let port = 8000;
let loginHTML = `
    <form action="/addTask" method="get">
        <label>Emp ID: </label>
        <input type="number" name="empID"/><br/>
        <label>Task ID: </label>
        <input type="number" name="taskID"/><br/>
        <label>Task: </label>
        <input type="text" name="task"/><br/>
        <label>Deadline: </label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add Task"/>
        <input type="reset" value = "Reset"/>
    </form>

    <form action="/deleteTask" method="get">
        <label>Task ID: </label>
        <input type="number" name="taskID"/>
        <input type="submit" value="Delete Task"/>
    </form>
`

let server = http.createServer((req, res) => {
    var path = url.parse(req.url, true).pathname;

    if (path == "/") {
        res.setHeader("content-type", "text/html");
        res.end(loginHTML);
    }

    else if (path == "/addTask") {
        var task = url.parse(req.url, true).query;
        var taskArray = JSON.parse(fs.readFileSync("tasks.json"));
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].taskID == task.taskID) { res.end("You Cannot have duplicate IDs") }
        }

        var printInfo = {
            empID: task.empID,
            taskID: task.taskID,
            thisTask: task.task,
            deadline: task.deadline,
        }

        taskArray.push(printInfo);
        fs.writeFileSync("tasks.json", JSON.stringify(taskArray));
        res.end(createTable(res,taskArray));
    }

    else if (path == "/deleteTask") {
        var task = url.parse(req.url, true).query;
        var taskArray = JSON.parse(fs.readFileSync("tasks.json"));
        var deleteID = task.taskID;

        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].taskID == deleteID) { taskArray.splice(i, 1); }
        }

        fs.writeFileSync("tasks.json", JSON.stringify(taskArray));
        res.end(createTable(res,taskArray));
    }
})

function createTable(res,taskArray){
    for(let i=0; i<taskArray.length; i++){
        let tableHTML = `
            <table>
                <tr>
                    <td>${taskArray[i].empID}</td>
                    <td>${taskArray[i].taskID}</td>
                    <td>${taskArray[i].thisTask}</td>
                    <td>${taskArray[i].deadline}</td>
                </tr>
            </table>
        `
        res.write(tableHTML);
    }
} 

server.listen(port, () => console.log(`listening on port ${port}`));

