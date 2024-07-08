function setTimestamp() {
    var now = new Date();
    var timestamp = now.toISOString();
    document.getElementById('timestamp').value = timestamp;
}