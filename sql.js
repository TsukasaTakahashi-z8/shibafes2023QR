// SQLへデータを送信するJS
const queue = [];

function addQueue(data) {
    queue.push(data);
    console.log(queue);
}

// ここは並列で処理する
function insert() {
    const insertData = queue.shift();
    console.log("insert: " + insertData);
    // ここにSQLへ送信する処理
}
