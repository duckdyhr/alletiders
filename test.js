function () {
	function getUserSetting(a, b) {
		var c = getAllUserSettings();
		return c.hasOwnProperty(a) ? c[a] : "undefined" != typeof b ? b : ""
	}

	function setUserSetting(a, b, c) {
		if ("object" != typeof userSettings) return !1;
		var d = userSettings.uid,
			e = wpCookies.getHash("wp-settings-" + d),
			f = userSettings.url,
			g = !!userSettings.secure;
		return a = a.toString().replace(/[^A-Za-z0-9_-]/g, ""), b = "number" == typeof b ? parseInt(b, 10) : b.toString().replace(/[^A-Za-z0-9_-]/g, ""), e = e || {}, c ? delete e[a] : e[a] = b, wpCookies.setHash("wp-settings-" + d, e, 31536e3, f, "", g), wpCookies.set("wp-settings-time-" + d, userSettings.time, 31536e3, f, "", g), a
	}

	function deleteUserSetting(a) {
		return setUserSetting(a, "", 1)
	}

	function getAllUserSettings() {
		return "object" != typeof userSettings ? {} : wpCookies.getHash("wp-settings-" + userSettings.uid) || {}
	}
	var wpCookies = {
		each: function (a, b, c) {
			var d, e;
			if (!a) return 0;
			if (c = c || a, "undefined" != typeof a.length) {
				for (d = 0, e = a.length; d < e; d++)
					if (b.call(c, a[d], d, a) === !1) return 0
			} else
				for (d in a)
					if (a.hasOwnProperty(d) && b.call(c, a[d], d, a) === !1) return 0;
			return 1
		},
		getHash: function (a) {
			var b, c = this.get(a);
			return c && this.each(c.split("&"), function (a) {
				a = a.split("="), b = b || {}, b[a[0]] = a[1]
			}), b
		},
		setHash: function (a, b, c, d, e, f) {
			var g = "";
			this.each(b, function (a, b) {
				g += (g ? "&" : "") + b + "=" + a
			}), this.set(a, g, c, d, e, f)
		},
		get: function (a) {
			var b, c, d = document.cookie,
				e = a + "=";
			if (d) {
				if (c = d.indexOf("; " + e), c === -1) {
					if (c = d.indexOf(e), 0 !== c) return null
				} else c += 2;
				return b = d.indexOf(";", c), b === -1 && (b = d.length), decodeURIComponent(d.substring(c + e.length, b))
			}
		},
		set: function (a, b, c, d, e, f) {
			var g = new Date;
			"object" == typeof c && c.toGMTString ? c = c.toGMTString() : parseInt(c, 10) ? (g.setTime(g.getTime() + 1e3 * parseInt(c, 10)), c = g.toGMTString()) : c = "", document.cookie = a + "=" + encodeURIComponent(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "")
		},
		remove: function (a, b, c, d) {
			this.set(a, "", -1e3, b, c, d)
		}
	};
}()
