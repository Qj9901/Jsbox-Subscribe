var $ = $$()
var key = ["kayanouriko_mihoyobbs_headers_bbs","kayanouriko_mihoyobbs_headers_sign","kayanouriko_mihoyobbs_config"]

key.forEach(i => {
	  console.log(`${i} 旧值: ${$.read(i)}`)
	  $.write('', i)
})
$.notify('米游社签到', '', '初始化米游社BoxJS设置成功, 请手动刷新BoxJs页面')
$.done()

function $$() {
	  const isRequest = typeof $request != "undefined"
	  const isSurge = typeof $httpClient != "undefined"
	  const isQuanX = typeof $task != "undefined"
	  const isLoon = typeof $loon != "undefined"
	  const read = (key) => {
		      if (isQuanX) return $prefs.valueForKey(key)
		      if (isSurge) return $persistentStore.read(key)
		    }
	  const write = (value, key) => {
		      if (isQuanX) return $prefs.removeValueForKey(key)
		      if (isLoon) return $persistentStore.write('', key)
		      if (isSurge) return $persistentStore.write(null, key)
		    }
	  const notify = (title, subtitle, message) => {
		      if (isQuanX) $notify(title, subtitle, message)
		      if (isSurge) $notification.post(title, subtitle, message)
		    }
	  const done = (value = {}) => {
		      if (isQuanX) $done(value)
		      if (isSurge) isRequest ? $done(value) : $done()
		    }
	  return {
		      notify,
		      read,
		      write,
		      done
		    }
}
