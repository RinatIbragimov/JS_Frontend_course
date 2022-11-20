var week = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"];

alert("Дни недели:" + '\n' + week[0] + "\n" + week[1] + "\n" + week[2] + "\n" + week[3] + "\n" + week[4] + "\n" + week[5] + '\n' + week[6]);

var arr = ["37", "23145", "23124", "7452", "32145", "77", "7134"];
for (let i = 0; i < 7; i++) {
    if (arr[i][0] == "3" || arr[i][0] == "7") {
        console.log(arr[i]);
    }
}