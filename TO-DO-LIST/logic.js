let addNewTask;
let process;
let running = true;
let task = [];

while (running) {
    let choice = Number(prompt('Display\n1. Add Task \n2. View Tasks\n3. Exit\n  Enter your choice:'));
    switch (choice) {
        case 1:
            while (running) {
                let i = 1;
                let ask = prompt("Press add for a new task, Press exit for exit")
                if (ask == "add") {
                    addNewTask = prompt("PLease add a new task.");
                    task.push(addNewTask);
                    console.log(`Task ${i++} + ${addNewTask}`)
                }
                else if (ask == "exit") {
                    alert('you exit th add new task')
                    running = false;
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
            alert('nag exit ka na sa system!')
            running = false;
            break;
        default:
            console.log("Invalid choice. Please try again.");
            break;
    }


}













