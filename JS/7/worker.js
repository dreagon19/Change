onmessage = (e) => {
    let val = 0;
    while (val < 100000000000000) {
        val++;
    }
    postMessage(val);
}