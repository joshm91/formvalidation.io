import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/validators/less-than/index.html generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/less-than/index.html";

// (10:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Options");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Options");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (69:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("ES6 Module Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "ES6 Module Example");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (101:12) <PrevButton target="/guide/validators/issn">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("issn validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "issn validator");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (102:12) <NextButton target="/guide/validators/mac">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("mac validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "mac validator");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, t4, h30, t5, t6, p0, sup0, t7, t8, a, t9, t10, t11, table, tr0, th0, t12, t13, th1, t14, t15, th2, t16, t17, th3, t18, t19, tr1, td0, code0, t20, t21, td1, code1, t22, t23, td2, t24, t25, td3, t26, code2, t27, t28, code3, t29, t30, br0, t31, code4, t32, t33, br1, t34, code5, t35, t36, t37, tr2, td4, code6, t38, sup1, t39, t40, td5, code7, t41, t42, td6, t43, t44, td7, t45, t46, tr3, td8, code8, t47, t48, td9, code9, t49, t50, td10, t51, t52, td11, t53, t54, h31, t55, t56, t57, section1, t58, p1, t59, t60, t61, t62, section2, div, t63, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import lessThan from 'formvalidation/dist/es6/validators/lessThan';

const result = lessThan().validate({
    value: ...,
    options: {
        inclusive: ...,
        max: ...,
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message     
}
*/
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import lessThan from 'formvalidation/dist/es6/validators/lessThan';

const res1 = lessThan().validate({
    value: 20,
    options: {
        max: 30,
        message: 'The value has to be less than 30',
    },
});
// res1.valid === true

const res2 = lessThan().validate({
    value: 30,
    options: {
        inclusive: false,
        max: 30,
        message: 'The value has to be less than 30',
    },
});
// res2.valid === false
` },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['between', 'greaterThan'] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/issn",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/mac",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("lessThan validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Check if the value is less than or equals to given number");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			h30 = element("h3");
			t5 = text("Using with form field");
			t6 = space();
			p0 = element("p");
			sup0 = element("sup");
			t7 = text("*");
			t8 = text(" presents a required option. The HTML attributes are used to set the validator options via the ");
			a = element("a");
			t9 = text("Declarative");
			t10 = text(" plugin");
			t11 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t12 = text("Name");
			t13 = space();
			th1 = element("th");
			t14 = text("HTML attribute");
			t15 = space();
			th2 = element("th");
			t16 = text("Type");
			t17 = space();
			th3 = element("th");
			t18 = text("Description");
			t19 = space();
			tr1 = element("tr");
			td0 = element("td");
			code0 = element("code");
			t20 = text("inclusive");
			t21 = space();
			td1 = element("td");
			code1 = element("code");
			t22 = text("data-fv-less-than___inclusive");
			t23 = space();
			td2 = element("td");
			t24 = text("Boolean");
			t25 = space();
			td3 = element("td");
			t26 = text("Can be ");
			code2 = element("code");
			t27 = text("true");
			t28 = text(" (default) or ");
			code3 = element("code");
			t29 = text("false");
			t30 = text(".");
			br0 = element("br");
			t31 = text("\n                    If ");
			code4 = element("code");
			t32 = text("true");
			t33 = text(", the input value must be less than or equal to the comparison one.");
			br1 = element("br");
			t34 = text("\n                    If ");
			code5 = element("code");
			t35 = text("false");
			t36 = text(", the input value must be less than the comparison one.");
			t37 = space();
			tr2 = element("tr");
			td4 = element("td");
			code6 = element("code");
			t38 = text("max");
			sup1 = element("sup");
			t39 = text("*");
			t40 = space();
			td5 = element("td");
			code7 = element("code");
			t41 = text("data-fv-less-than___max");
			t42 = space();
			td6 = element("td");
			t43 = text("Float");
			t44 = space();
			td7 = element("td");
			t45 = text("The number to make a comparison to");
			t46 = space();
			tr3 = element("tr");
			td8 = element("td");
			code8 = element("code");
			t47 = text("message");
			t48 = space();
			td9 = element("td");
			code9 = element("code");
			t49 = text("data-fv-less-than___message");
			t50 = space();
			td10 = element("td");
			t51 = text("String");
			t52 = space();
			td11 = element("td");
			t53 = text("The error message");
			t54 = space();
			h31 = element("h3");
			t55 = text("Using with ES6 module");
			t56 = space();
			samplecode0.$$.fragment.c();
			t57 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t58 = space();
			p1 = element("p");
			t59 = text("The following snippet shows how to use the lessThan validator with ES6 module:");
			t60 = space();
			samplecode1.$$.fragment.c();
			t61 = space();
			relatedvalidators.$$.fragment.c();
			t62 = space();
			section2 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t63 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "lessThan validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Check if the value is less than or equals to given number");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n\n        ");

			h30 = claim_element(section0_nodes, "H3", {}, false);
			var h30_nodes = children(h30);

			t5 = claim_text(h30_nodes, "Using with form field");
			h30_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			sup0 = claim_element(p0_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t7 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, " presents a required option. The HTML attributes are used to set the validator options via the ");

			a = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t9 = claim_text(a_nodes, "Declarative");
			a_nodes.forEach(detach);
			t10 = claim_text(p0_nodes, " plugin");
			p0_nodes.forEach(detach);
			t11 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t12 = claim_text(th0_nodes, "Name");
			th0_nodes.forEach(detach);
			t13 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t14 = claim_text(th1_nodes, "HTML attribute");
			th1_nodes.forEach(detach);
			t15 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t16 = claim_text(th2_nodes, "Type");
			th2_nodes.forEach(detach);
			t17 = claim_text(tr0_nodes, "\n                ");

			th3 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th3_nodes = children(th3);

			t18 = claim_text(th3_nodes, "Description");
			th3_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t19 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code0 = claim_element(td0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t20 = claim_text(code0_nodes, "inclusive");
			code0_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t21 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			code1 = claim_element(td1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t22 = claim_text(code1_nodes, "data-fv-less-than___inclusive");
			code1_nodes.forEach(detach);
			td1_nodes.forEach(detach);
			t23 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t24 = claim_text(td2_nodes, "Boolean");
			td2_nodes.forEach(detach);
			t25 = claim_text(tr1_nodes, "\n                ");

			td3 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			t26 = claim_text(td3_nodes, "Can be ");

			code2 = claim_element(td3_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t27 = claim_text(code2_nodes, "true");
			code2_nodes.forEach(detach);
			t28 = claim_text(td3_nodes, " (default) or ");

			code3 = claim_element(td3_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t29 = claim_text(code3_nodes, "false");
			code3_nodes.forEach(detach);
			t30 = claim_text(td3_nodes, ".");

			br0 = claim_element(td3_nodes, "BR", {}, false);
			var br0_nodes = children(br0);

			br0_nodes.forEach(detach);
			t31 = claim_text(td3_nodes, "\n                    If ");

			code4 = claim_element(td3_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t32 = claim_text(code4_nodes, "true");
			code4_nodes.forEach(detach);
			t33 = claim_text(td3_nodes, ", the input value must be less than or equal to the comparison one.");

			br1 = claim_element(td3_nodes, "BR", {}, false);
			var br1_nodes = children(br1);

			br1_nodes.forEach(detach);
			t34 = claim_text(td3_nodes, "\n                    If ");

			code5 = claim_element(td3_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t35 = claim_text(code5_nodes, "false");
			code5_nodes.forEach(detach);
			t36 = claim_text(td3_nodes, ", the input value must be less than the comparison one.");
			td3_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t37 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			code6 = claim_element(td4_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t38 = claim_text(code6_nodes, "max");
			code6_nodes.forEach(detach);

			sup1 = claim_element(td4_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t39 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			td4_nodes.forEach(detach);
			t40 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			code7 = claim_element(td5_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t41 = claim_text(code7_nodes, "data-fv-less-than___max");
			code7_nodes.forEach(detach);
			td5_nodes.forEach(detach);
			t42 = claim_text(tr2_nodes, "\n                ");

			td6 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			t43 = claim_text(td6_nodes, "Float");
			td6_nodes.forEach(detach);
			t44 = claim_text(tr2_nodes, "\n                ");

			td7 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t45 = claim_text(td7_nodes, "The number to make a comparison to");
			td7_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t46 = claim_text(table_nodes, "\n            ");

			tr3 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr3_nodes = children(tr3);

			td8 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td8_nodes = children(td8);

			code8 = claim_element(td8_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t47 = claim_text(code8_nodes, "message");
			code8_nodes.forEach(detach);
			td8_nodes.forEach(detach);
			t48 = claim_text(tr3_nodes, "\n                ");

			td9 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td9_nodes = children(td9);

			code9 = claim_element(td9_nodes, "CODE", {}, false);
			var code9_nodes = children(code9);

			t49 = claim_text(code9_nodes, "data-fv-less-than___message");
			code9_nodes.forEach(detach);
			td9_nodes.forEach(detach);
			t50 = claim_text(tr3_nodes, "\n                ");

			td10 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td10_nodes = children(td10);

			t51 = claim_text(td10_nodes, "String");
			td10_nodes.forEach(detach);
			t52 = claim_text(tr3_nodes, "\n                ");

			td11 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td11_nodes = children(td11);

			t53 = claim_text(td11_nodes, "The error message");
			td11_nodes.forEach(detach);
			tr3_nodes.forEach(detach);
			table_nodes.forEach(detach);
			t54 = claim_text(section0_nodes, "\n\n        ");

			h31 = claim_element(section0_nodes, "H3", {}, false);
			var h31_nodes = children(h31);

			t55 = claim_text(h31_nodes, "Using with ES6 module");
			h31_nodes.forEach(detach);
			t56 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t57 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t58 = claim_text(section1_nodes, "\n\n        ");

			p1 = claim_element(section1_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t59 = claim_text(p1_nodes, "The following snippet shows how to use the lessThan validator with ES6 module:");
			p1_nodes.forEach(detach);
			t60 = claim_text(section1_nodes, "\n        ");
			samplecode1.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t61 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t62 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			div = claim_element(section2_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t63 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 100);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 156);
			add_location(h30, file, 11, 8, 312);
			add_location(sup0, file, 12, 29, 372);
			a.href = "/guide/plugins/declarative";
			a.className = "blue dim link";
			add_location(a, file, 12, 136, 479);
			p0.className = "lh-copy i";
			add_location(p0, file, 12, 8, 351);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 15, 16, 692);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 16, 16, 752);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 17, 16, 822);
			th3.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th3, file, 18, 16, 882);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 14, 12, 643);
			add_location(code0, file, 21, 36, 1032);
			td0.className = "pv2 ph3";
			add_location(td0, file, 21, 16, 1012);
			add_location(code1, file, 22, 36, 1096);
			td1.className = "pv2 ph3";
			add_location(td1, file, 22, 16, 1076);
			td2.className = "pv2 ph3";
			add_location(td2, file, 23, 16, 1160);
			add_location(code2, file, 25, 27, 1265);
			add_location(code3, file, 25, 58, 1296);
			add_location(br0, file, 25, 77, 1315);
			add_location(code4, file, 26, 23, 1345);
			add_location(br1, file, 26, 107, 1429);
			add_location(code5, file, 27, 23, 1459);
			td3.className = "pv2 ph3 lh-copy";
			add_location(td3, file, 24, 16, 1209);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 20, 12, 963);
			add_location(code6, file, 31, 36, 1654);
			add_location(sup1, file, 31, 52, 1670);
			td4.className = "pv2 ph3";
			add_location(td4, file, 31, 16, 1634);
			add_location(code7, file, 32, 36, 1724);
			td5.className = "pv2 ph3";
			add_location(td5, file, 32, 16, 1704);
			td6.className = "pv2 ph3";
			add_location(td6, file, 33, 16, 1782);
			td7.className = "pv2 ph3";
			add_location(td7, file, 34, 16, 1829);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 30, 12, 1585);
			add_location(code8, file, 37, 36, 1988);
			td8.className = "pv2 ph3";
			add_location(td8, file, 37, 16, 1968);
			add_location(code9, file, 38, 36, 2050);
			td9.className = "pv2 ph3";
			add_location(td9, file, 38, 16, 2030);
			td10.className = "pv2 ph3";
			add_location(td10, file, 39, 16, 2112);
			td11.className = "pv2 ph3";
			add_location(td11, file, 40, 16, 2160);
			tr3.className = "striped--light-gray";
			add_location(tr3, file, 36, 12, 1919);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table, file, 13, 8, 573);
			add_location(h31, file, 44, 8, 2247);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 246);
			p1.className = "lh-copy";
			add_location(p1, file, 70, 8, 2773);
			section1.className = "mv5";
			add_location(section1, file, 67, 4, 2696);
			div.className = "flex";
			add_location(div, file, 99, 8, 3526);
			section2.className = "mv5";
			add_location(section2, file, 98, 4, 3496);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t4);
			append(section0, h30);
			append(h30, t5);
			append(section0, t6);
			append(section0, p0);
			append(p0, sup0);
			append(sup0, t7);
			append(p0, t8);
			append(p0, a);
			append(a, t9);
			append(p0, t10);
			append(section0, t11);
			append(section0, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t12);
			append(tr0, t13);
			append(tr0, th1);
			append(th1, t14);
			append(tr0, t15);
			append(tr0, th2);
			append(th2, t16);
			append(tr0, t17);
			append(tr0, th3);
			append(th3, t18);
			append(table, t19);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code0);
			append(code0, t20);
			append(tr1, t21);
			append(tr1, td1);
			append(td1, code1);
			append(code1, t22);
			append(tr1, t23);
			append(tr1, td2);
			append(td2, t24);
			append(tr1, t25);
			append(tr1, td3);
			append(td3, t26);
			append(td3, code2);
			append(code2, t27);
			append(td3, t28);
			append(td3, code3);
			append(code3, t29);
			append(td3, t30);
			append(td3, br0);
			append(td3, t31);
			append(td3, code4);
			append(code4, t32);
			append(td3, t33);
			append(td3, br1);
			append(td3, t34);
			append(td3, code5);
			append(code5, t35);
			append(td3, t36);
			append(table, t37);
			append(table, tr2);
			append(tr2, td4);
			append(td4, code6);
			append(code6, t38);
			append(td4, sup1);
			append(sup1, t39);
			append(tr2, t40);
			append(tr2, td5);
			append(td5, code7);
			append(code7, t41);
			append(tr2, t42);
			append(tr2, td6);
			append(td6, t43);
			append(tr2, t44);
			append(tr2, td7);
			append(td7, t45);
			append(table, t46);
			append(table, tr3);
			append(tr3, td8);
			append(td8, code8);
			append(code8, t47);
			append(tr3, t48);
			append(tr3, td9);
			append(td9, code9);
			append(code9, t49);
			append(tr3, t50);
			append(tr3, td10);
			append(td10, t51);
			append(tr3, t52);
			append(tr3, td11);
			append(td11, t53);
			append(section0, t54);
			append(section0, h31);
			append(h31, t55);
			append(section0, t56);
			mount_component(samplecode0, section0, null);
			insert(target, t57, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t58);
			append(section1, p1);
			append(p1, t59);
			append(section1, t60);
			mount_component(samplecode1, section1, null);
			insert(target, t61, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t62, anchor);
			insert(target, section2, anchor);
			append(section2, div);
			mount_component(prevbutton, div, null);
			append(div, t63);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t3);
				detach(section0);
			}

			heading0.$destroy();

			samplecode0.$destroy();

			if (detaching) {
				detach(t57);
				detach(section1);
			}

			heading1.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t61);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t62);
				detach(section2);
			}

			prevbutton.$destroy();

			nextbutton.$destroy();
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var guidelayout = new GuideLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			guidelayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • lessThan validator";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var guidelayout_changes = {};
			if (changed.$$scope) guidelayout_changes.$$scope = { changed, ctx };
			guidelayout.$set(guidelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			guidelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			guidelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			guidelayout.$destroy(detaching);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
