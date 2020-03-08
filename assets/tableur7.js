!function () {
	$(window).width(), $(window).height(), $("#tableur").height(), $("#tableur").width();

	$(".tableur,.nostra").val("");
	$("input").focus();
	$("#tableur").fadeIn(200);

	var P = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26, " ": 0 },
		Q = { A: 26, B: 25, C: 24, D: 23, E: 22, F: 21, G: 20, H: 19, I: 18, J: 17, K: 16, L: 15, M: 14, N: 13, O: 12, P: 11, Q: 10, R: 9, S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1, " ": 0 },
		R = { A: 36, B: 37, C: 38, D: 39, E: 40, F: 41, G: 42, H: 43, I: 44, J: 45, K: 46, L: 47, M: 48, N: 49, O: 50, P: 51, Q: 52, R: 53, S: 54, T: 55, U: 56, V: 57, W: 58, X: 59, Y: 60, Z: 61, " ": 0 },
		T = { A: 61, B: 60, C: 59, D: 58, E: 57, F: 56, G: 55, H: 54, I: 53, J: 52, K: 51, L: 50, M: 49, N: 48, O: 47, P: 46, Q: 45, R: 44, S: 43, T: 42, U: 41, V: 40, W: 39, X: 38, Y: 37, Z: 36, " ": 0 },
		V = { A: 100, B: 101, C: 102, D: 103, E: 104, F: 105, G: 106, H: 107, I: 108, J: 109, K: 110, L: 111, M: 112, N: 113, O: 114, P: 115, Q: 116, R: 117, S: 118, T: 119, U: 120, V: 121, W: 122, X: 123, Y: 124, Z: 125, " ": 0 },
		W = { A: 125, B: 124, C: 123, D: 122, E: 121, F: 120, G: 119, H: 118, I: 117, J: 116, K: 115, L: 114, M: 113, N: 112, O: 111, P: 110, Q: 109, R: 108, S: 107, T: 106, U: 105, V: 104, W: 103, X: 102, Y: 101, Z: 100, " ": 0 };

	function n(e) {
		var t;

		switch (e) {
			case 0: t = "zero"; break;
			case 1: t = "un"; break;
			case 2: t = "deux"; break;
			case 3: t = "trois"; break;
			case 4: t = "quatre"; break;
			case 5: t = "cinq"; break;
			case 6: t = "six"; break;
			case 7: t = "sept"; break;
			case 8: t = "huit"; break;
			case 9: t = "neuf"
		}return t
	}

	function r(e) {
		switch (e) {
			case 10: dizaine = "dix"; break;
			case 11: dizaine = "onze"; break;
			case 12: dizaine = "douze"; break;
			case 13: dizaine = "treize"; break;
			case 14: dizaine = "quatorze"; break;
			case 15: dizaine = "quinze"; break;
			case 16: dizaine = "seize"; break;
			case 17: dizaine = "dix-sept"; break;
			case 18: dizaine = "dix-huit"; break;
			case 19: dizaine = "dix-neuf"; break;
			case 20: dizaine = "vingt"; break;
			case 30: dizaine = "trente"; break;
			case 40: dizaine = "quarante"; break;
			case 50: dizaine = "cinquante"; break;
			case 60: dizaine = "soixante"; break;
			case 70: dizaine = "soixante-dix"; break;
			case 80: dizaine = "quatre-vingt"; break;
			case 90: dizaine = "quatre-vingt-dix"
		}
		return dizaine
	}
	function _(e) {
		var t, a, s, i = "";

		if (15 < e.toString().replace(/ /gi, "").length) return "depassement de capacite";

		if (isNaN(e.toString().replace(/ /gi, ""))) return "Nombre non valide";

		if (s = parseFloat(e.toString().replace(/ /gi, "")), Math.ceil(s) != s) return "Nombre avec virgule non gere.";

		switch (s.toString().length) {
			case 1: i = n(s); break;

			case 2: 19 < s ? (t = Math.floor(s / 10), a = s % 10, s < 71 || 79 < s && s < 91 ? (console.log(a), 0 == a && (i = r(10 * t)), 1 == a && (i = 81 == s ? r(10 * t) + "-" + n(a) : r(10 * t) + "-et-" + n(a)), 1 < a && (i = r(10 * t) + "-" + n(a))) : i = 71 == s ? r(10 * (t - 1)) + "-et-" + r(10 + a) : r(10 * (t - 1)) + "-" + r(10 + a)) : i = r(s); break;
			case 3: a = s % 100, 1 == (t = Math.floor(s / 100)) && 0 == a && (i = "cent"), 1 == t && 0 != a && (i = "cent " + _(a)), 1 < t && 0 == a && (i = n(t) + " cents"), 1 < t && 0 != a && (i = n(t) + " cent " + _(a)); break;
			case 4: case 5: case 6: a = s - 1e3 * (t = Math.floor(s / 1e3)), 1 == t && 0 == a && (i = "mille"), 1 == t && 0 != a && (i = "mille " + _(a)), 1 < t && 0 == a && (i = _(t) + " mille"), 1 < t && 0 != a && (i = _(t) + " mille " + _(a)); break;
			case 7: case 8: case 9: a = s % 1e6, 1 == (t = Math.floor(s / 1e6)) && 0 == a && (i = "un million"), 1 == t && 0 != a && (i = "un million " + _(a)), 1 < t && 0 == a && (i = _(t) + " millions"), 1 < t && 0 != a && (i = _(t) + " millions " + _(a)); break;
			case 10: case 11: case 12: a = s - 1e9 * (t = Math.floor(s / 1e9)), 1 == t && 0 == a && (i = "un milliard"), 1 == t && 0 != a && (i = "un milliard " + _(a)), 1 < t && 0 == a && (i = _(t) + " milliards"), 1 < t && 0 != a && (i = _(t) + " milliards " + _(a)); break;
			case 13: case 14: case 15: a = s - 1e12 * (t = Math.floor(s / 1e12)), 1 == t && 0 == a && (i = "un billion"), 1 == t && 0 != a && (i = "un billion " + _(a)), 1 < t && 0 == a && (i = _(t) + " billions"), 1 < t && 0 != a && (i = _(t) + " billions " + _(a))
		}return "quatre-vingt" == i.substr(i.length - "quatre-vingt".length, "quatre-vingt".length) && (i += "s"), i
	} function X(e) {
		var t = e.length, a = [], s = [];
		a[0] = "vide", s[0] = "vide";
		for (var i = 0, n = 0, r = 0;
			r < t;
			r++)"0" == e[r] || "1" == e[r] || "2" == e[r] || "3" == e[r] || "4" == e[r] || "5" == e[r] || "6" == e[r] || "7" == e[r] || "8" == e[r] || "9" == e[r] ? 0 == i ? a[n += i = 1] = e[r] : a[n] += e[r] : i = 0;
		for (var l = a.length, c = 0; c < l; c++)
			if ("vide" != a[c]) {
				1;
				var o = _(parseInt(a[c]));
				s[c] = o
			} var b = e;
		for (k = 0; k < l; k++)
			b = (b = b.replace(a[k], s[k])).replace(/-/g, " ");
		return b
	}
	$(".tableur").keyup(function () {

		(e = (e = $(".marqueur").val()).split(",")).length;
		var e, t = $(".tableur").val().toUpperCase();
		(t = t.replace(/[^a-zA-Z0-9 ]/g, "")).replace(/\s/g, ""), t = (t = X(t)).toUpperCase(), $(".mot").text(t);
		var a = $(".tableur").val().toUpperCase();
		a.replace(/\s/g, ""), a = (a = X(a = a.replace(/[^a-zA-Z0-9 ]/g, ""))).toUpperCase(), $(".mot_nostra").text(a);
		var s = t.length, i = 0, n = 0, r = 0, l = 0, c = 0, o = 0, b = 0, _ = 0, x = 0, v = 0, u = 0, g = 0, d = 0, k = 0, h = 0, p = 0, f = 0, z = 0, m = 0, M = 0, q = 0, C = 0, w = 0, U = 0, N = 0, S = 0, A = 0, I = 0, L = 0, Z = 0, E = 0, F = 0, O = 0, Y = 0, j = 0, B = 0;
		"" == t && (B = j = Y = O = F = E = Z = L = I = A = S = N = U = w = C = q = M = m = z = f = p = h = k = d = g = u = v = x = _ = b = o = c = l = r = n = i = 0, $(".log").text(i), $(".base100").text(o), $(".base3").text(n), $(".base6").text(r), $(".base9").text(l), $(".base36").text(c), $(".log_inv").text(b), $(".base100_inv").text(_), $(".base3_inv").text(x), $(".base6_inv").text(v), $(".base9_inv").text(u), $(".base36_inv").text(g), $(".log_nostra").text(i), $(".base100_nostra").text(o), $(".base3_nostra").text(n), $(".base6_nostra").text(r), $(".base9_nostra").text(l), $(".base36_nostra").text(c), $(".log_inv_nostra").text(b), $(".base100_inv_nostra").text(_), $(".base3_inv_nostra").text(x), $(".base6_inv_nostra").text(v), $(".base9_inv_nostra").text(u), $(".base36_inv_nostra").text(g), $(".log_calcul").text(N), $(".base3_calcul").text(S), $(".base6_calcul").text(A), $(".base9_calcul").text(I), $(".base36_calcul").text(L), $(".base100_calcul").text(Z), $(".log_inv_calcul").text(E), $(".base3_inv_calcul").text(F), $(".base6_inv_calcul").text(O), $(".base9_inv_calcul").text(Y), $(".base36_inv_calcul").text(j), $(".base100_inv_calcul").text(B));
		for (var D = 0;
			D < s;
			D++)i += P[t[D]], $(".log").text(i), n += 3 * P[t[D]], $(".base3").text(n), r += 6 * P[t[D]], $(".base6").text(r), l += 9 * P[t[D]], $(".base9").text(l), c += R[t[D]], $(".base36").text(c), o += V[t[D]], $(".base100").text(o), b += Q[t[D]], $(".log_inv").text(b), _ += 3 * Q[t[D]], $(".base3_inv").text(_), x += 6 * Q[t[D]], $(".base6_inv").text(x), v += 9 * Q[t[D]], $(".base9_inv").text(v), u += T[t[D]], $(".base36_inv").text(u), g += W[t[D]], $(".base100_inv").text(g), N = i - b, $(".log_calcul").text(N), Z = o - g, $(".base100_calcul").text(Z), S = n - _, $(".base3_calcul").text(S), A = r - x, $(".base6_calcul").text(A), I = l - v, $(".base9_calcul").text(I), L = c - u, $(".base36_calcul").text(L), E = b - i, $(".log_inv_calcul").text(E), B = g - o, $(".base100_inv_calcul").text(B), F = _ - n, $(".base3_inv_calcul").text(F), O = x - r, $(".base6_inv_calcul").text(O), Y = v - l, $(".base9_inv_calcul").text(Y), j = u - c, $(".base36_inv_calcul").text(j);
		for (var G = (a = a.split("A").join("").split("E").join("").split("I").join("").split("O").join("").split("U").join("").split("Y").join("")).length, H = 0;
			H < G;
			H++)d += P[a[H]], $(".log_nostra").text(d), k += 3 * P[a[H]], $(".base3_nostra").text(k), h += 6 * P[a[H]], $(".base6_nostra").text(h), p += 9 * P[a[H]], $(".base9_nostra").text(p), f += R[a[H]], $(".base36_nostra").text(f), z += V[a[H]], $(".base100_nostra").text(z), m += Q[a[H]], $(".log_inv_nostra").text(m), M += 3 * Q[a[H]], $(".base3_inv_nostra").text(M), q += 6 * Q[a[H]], $(".base6_inv_nostra").text(q), C += 9 * Q[a[H]], $(".base9_inv_nostra").text(C), w += T[a[H]], $(".base36_inv_nostra").text(w), U += W[a[H]], $(".base100_inv_nostra").text(U);
		var J = ["111", "222", "333", "444", "555", "666", "777", "1998"];
		var J1 = ["367", "367", "370", "371"];

		"" != e[0] && (J = e);
		var K = J.length;

		var regexa = new RegExp("^(.)*7(.)*4(.)*$");
		var regexb = new RegExp("^(.)*3(.)*7(.)*$");
		var regex1 = new RegExp("^(.)*1(.)*1(.)*1(.)*$");
		var regex2 = new RegExp("^(.)*2(.)*2(.)*2(.)*$");
		var regex3 = new RegExp("^(.)*3(.)*3(.)*3(.)*$");
		var regex4 = new RegExp("^(.)*4(.)*4(.)*4(.)*$");
		var regex6 = new RegExp("^(.)*6(.)*6(.)*6(.)*$");
		var regex9 = new RegExp("^(.)*9(.)*9(.)*9(.)*$");
		var regex98 = new RegExp("^(.)*1(.)*9(.)*9(.)*8(.)*$");

		var _foundi = 0; var _foundn = 0; var _first = 0; var _index = 0;
		$(".res_inverse").css("color", "white");
		$(".res_normal").css("color", "white");
		$(".res_nostra_normal").css("color", "#529700");
		$(".res_nostra_inverse").css("color", "#529700");
		$(".res_calcul").css("color", "#db2323");
		$(".res_calcul_inverse").css("color", "#db2323");

		$(".res_inverse").css("background", "transparent");
		$(".res_normal").css("background", "transparent");
		$(".res_nostra_normal").css("background", "transparent");
		$(".res_nostra_inverse").css("background", "transparent");
		$(".res_calcul").css("background", "transparent");
		$(".res_calcul_inverse").css("background", "transparent");

		if (regexa.test($('#res_inverse1').text())) {
			_foundi = 1;

			if (_set246("#res_inverse1", ".res_inverse") == false) {

				_set222("#res_inverse1", "#res_inverse2")
			}
		}
		if (regexa.test($('#res_normal1').text())) {
			_foundn = 1;
			if (_set246("#res_normal1", ".res_normal") == false) {
				_set222("#res_normal1", "#res_normal2");
			}
		}
		if (regexb.test($('#res_inverse1').text())) {
			_foundi = 1;
			_set123("#res_inverse1", ".res_inverse")
		}
		if (regexb.test($('#res_normal1').text())) {
			_foundn = 1;
			_set123("#res_normal1", ".res_normal")
		}

		if (_foundi == 0) {
			_setfifferentsCas(".res_inverse", "white");
		}
		if (_foundn == 0) {
			_setfifferentsCas(".res_normal", "white");
		}

		_setfifferentsCas(".res_nostra_normal", "#529700");
		_setfifferentsCas(".res_nostra_inverse", "#529700");
		_setfifferentsCas(".res_calcul", "#db2323");
		_setfifferentsCas(".res_calcul", "#db2323");
		_setfifferentsCas(".res_calcul_inverse", "#db2323");

		var _marqueur = $('.marqueur').val().split(",");
		var _marqueur_save = $('.marqueur').val();
		var _marc = "";
		for (var i = 0; i < _marqueur.length; i++) {
			_marc = _marqueur[i].trim();
			if (_marc.length > 0) {
				var regexc = new RegExp("^" + _marc + "$");
				var _found = 0;
				$(".all").each(function () {
					//if (regexc.test($(this).text() )){$(this).css("color","red");_found=1;}
				});
				//$('.marqueur').val("N’oublie pas,je ne t’offre que la Vérité,rien de plus...Une projection mentale de ton moi digitale");


			}
		}

		function _set123(a, b) {
			var _found = 0; var _total = 0; var _total9 = 0; var _total1 = 0; var _total2 = 0; var _total3 = 0;
			$(a).css("color", "yellow");
			$(b).each(function () {
				if (regex1.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
				if (regex2.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
				if (regex3.test($(this).text())) { $(this).css("color", "red"); _total3 = 1; }
			});
			_total = _total1 + _total2 + _total3;
			if (_total < 3) { $(b).css("color", "white"); _found = 0; }
			_total = 0;
		}
		function _set222(a, b) {

			var _found = 0; var _total = 0; var _total9 = 0;
			$(a).css("color", "yellow");
			if (regex2.test($(b).text())) { $(b).css("color", "red"); _total += 1; }

			if (_total < 1) { $(b).css("color", "white"); _found = 0; }
			_total = 0;
		}
		function _set246(a, b) {
			var _found = 0; var _total = 0; var _total1 = 0; var _total2 = 0; var _total3 = 0; var _total9 = 0;
			$(a).css("color", "yellow");
			$(b).each(function () {
				if (regex2.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
				if (regex4.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
				if (regex6.test($(this).text())) { $(this).css("color", "red"); _total3 = 1; }
			});
			_total = _total1 + _total2 + _total3;
			if (_total < 3) { $(b).css("color", "white"); _found = 0; return false; }
			_total = 0;
			return true;
		}

		function _setfifferentsCas(a, c) {

			var _found = 0; var _total = 0; var _total1 = 0; var _total2 = 0; var _total3 = 0; var _total9 = 0;
			$(a).each(function () {
				if (regex1.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
				if (regex3.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
				if (regex6.test($(this).text())) { $(this).css("color", "red"); _total3 = 1; }
			});
			_total = _total1 + _total2 + _total3;
			if (_total < 3) { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
			else { _found = 1; }

			if (_found == 0) {
				_total = 0; _total1 = 0; _total2 = 0; _total3 = 0; _total9 = 0;
				$(a).each(function () {
					if (regexb.test($(this).text())) { $(this).css("color", "yellow"); }
					if (regex1.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
					if (regex2.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
					if (regex3.test($(this).text())) { $(this).css("color", "red"); _total3 = 1; }
				});
				_total = _total1 + _total2 + _total3;
				if (_total < 3) { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
				else { _found = 1; }
			}

			if (_found == 0) {
				_total = 0; _total1 = 0; _total2 = 0; _total3 = 0; _total9 = 0;
				$(a).each(function () {
					if (regex2.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
					if (regex6.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
					if (regex98.test($(this).text())) { $(this).css("color", "red"); $(this).css("background", "transparent"); _total9 += 1; }
				});
				_total = _total1 + _total2;
				if (_total > 1 && _total9 > 0) { _found = 1; }
				else { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
			}

			if (_found == 0) {
				_total = 0; _total1 = 0; _total2 = 0; _total3 = 0; _total9 = 0;

				$(a).each(function () {

					if (regex3.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
					if (regex6.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
					if (regex98.test($(this).text())) { $(this).css("color", "red"); $(this).css("background", "transparent"); _total9 += 1; }
				});
				_total = _total1 + _total2;
				if (_total > 1 && _total9 > 0) { _found = 1; }
				else { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
			}

			if (_found == 0) {
				_total = 0; _total1 = 0; _total2 = 0; _total3 = 0; _total9 = 0;
				$(a).each(function () {

					if (regex3.test($(this).text())) { $(this).css("color", "red"); _total1 = 1; }
					if (regex9.test($(this).text())) { $(this).css("color", "red"); _total2 = 1; }
					if (regex98.test($(this).text())) { $(this).css("color", "red"); $(this).css("background", "transparent"); _total9 += 1; }
				});
				_total = _total1 + _total2;
				if (_total > 1 && _total9 > 0) { _found = 1; }
				else { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
			}

			if (_found == 0) {
				_total = 0; _total1 = 0; _total2 = 0; _total3 = 0; _total9 = 0;
				$(a).each(function () {
					if (regex6.test($(this).text())) { $(this).css("color", "red"); _total += 1; }
					if (regex98.test($(this).text())) { $(this).css("color", "red"); $(this).css("background", "transparent"); _total9 += 1; }
				});

				if (_total > 0 && _total9 > 0) { _found = 1; }
				else { _found = 0; $(a).css("color", c); $(this).css("background", "transparent"); }
			}
		}

		$(".log").text() == $(".log_inv").text() && $(".base100").text() == $(".base100_inv").text() && $(".base3").text() == $(".base3_inv").text() && $(".base6").text() == $(".base6_inv").text() && $(".base9").text() == $(".base9_inv").text() && $(".base36").text() == $(".base36_inv").text() && "0" != $(".log").text() && "0" != $(".log_inv").text() && $(".log, .log_inv,.base100, .base100_inv, .base3, .base3_inv, .base6, .base6_inv, .base9, .base9_inv, .base36, .base36_inv").css("color", "#eba804"), a = a.toLowerCase(), t = t.toLowerCase(), $(".mot_nostra").text(a), $(".mot").text(t)
	})
}();

