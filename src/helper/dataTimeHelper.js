// import moment from 'moment'
import dateFormat from './dateFormat'
export function dateTimeFormater(value) {
	if (dateFormat(value, 'YYYY-MM-DD') == 'Invalid date') {
		return '非法日期格式'
	}
	return dateFormat(value, 'YYYY-MM-DD');
}
