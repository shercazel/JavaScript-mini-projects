let addNewTask;
let process;
let running = true;
let ask;
// let i = 0


let task = [];

while (running) {
    let choice = Number(prompt('Display\n1. Add Task \n2. View Tasks\n 3.Remove Task \n 4. Exit\n  Enter your choice:'));
    switch (choice) {
        case 1:
            while (running) {
                ask = prompt("Press add for a new task, Press exit for exit")
                if (ask == "add") {
                    addNewTask = prompt("PLease add a new task.");
                    task.push(addNewTask);
                    // console.log(`Task ${i++} ${addNewTask}`)
                    console.log(`task ${task.length} ${addNewTask}`)
                }
                else if (ask == "exit") {
                    alert('you exit th add new task')
                    break;
                }
                else {
                    alert('invalid ka mag type boy, ayusin mo!')
                }
            }
            break;
        case 2:
            break;
        case 3:
            while (running) {
                let found = true;
                let allTask = "";
                let choose;
                for (let i = 0; i < task.length; i++) {
                    allTask += `${i + 1} Your Task ${task[i]}\n`;
                }
                alert("Remove your Task? choose the right number base on the task list of your task\n" + allTask);







            }

            break;
        case 4:
            alert('nag exit ka na sa system!')
            running = false;
            break;
        default:
            console.log("Invalid choice. Please try again.");
            break;
    }


}













