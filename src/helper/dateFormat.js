export default (value, format) => {
    var date = new Date(value);
    if (date.toString().indexOf('Invalid') >= 0) {
        return 'Invalid date'
    }
    switch (format) {
        case "YYYY-MM-DD":
            return date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
            break;
        case "YYYY年MM月DD日":
            return date.getFullYear() + '年' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '月' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日'
            break;
        case "YYYY-MM-DD HH:mm":
            return date.getFullYear() + '-' +
                ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' +
                (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ' +
                (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' +
                (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
            break;
        case "HH:mm":
            return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' +
                (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
            break;
    }
}
