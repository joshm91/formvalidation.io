import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/plugins/bootstrap3/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/bootstrap3/index.svelte";

// (9:4) <Tip>
function create_default_slot_10(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("Use the ");
			a = element("a");
			t1 = text("Bootstrap");
			t2 = text(" plugin if your form is made in Bootstrap 4");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "Use the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "Bootstrap");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " plugin if your form is made in Bootstrap 4");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/bootstrap";
			a.className = "blue dim link";
			add_location(a, file, 8, 17, 368);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);
			insert(target, t2, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(a);
				detach(t2);
			}
		}
	};
}

// (12:8) <Heading>
function create_default_slot_9(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Usage");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Usage");
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

// (53:8) <Heading>
function create_default_slot_8(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Horizontal form");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Horizontal form");
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

// (58:8) <Heading>
function create_default_slot_7(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Stacked form");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Stacked form");
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

// (63:8) <Heading>
function create_default_slot_6(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Inline form");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Inline form");
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

// (68:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Form without label");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Form without label");
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

// (73:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Multiple fields on the same row");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Multiple fields on the same row");
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

// (106:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Changelog");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Changelog");
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

// (118:12) <PrevButton target="/guide/plugins/bootstrap">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Bootstrap plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Bootstrap plugin");
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

// (119:12) <NextButton target="/guide/plugins/bulma">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Bulma plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Bulma plugin");
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
	var h1, t0, t1, h2, t2, a, t3, t4, t5, t6, section0, t7, p0, t8, t9, t10, p1, t11, code0, t12, t13, t14, p2, t15, t16, section1, t17, t18, section2, t19, t20, section3, t21, t22, section4, t23, t24, section5, t25, p3, t26, t27, p4, t28, code1, t29, t30, code2, t31, t32, code3, t33, t34, code4, t35, t36, code5, t37, t38, code6, t39, t40, code7, t41, t42, code8, t43, t44, t45, p5, t46, code9, t47, t48, t49, div0, t50, t51, section6, t52, ul, li, t53, t54, t55, section7, div1, t56, current;

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_10] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_9] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                bootstrap3: new FormValidation.plugins.Bootstrap3(),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_8] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo0 = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap3/horizontal-form",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo1 = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap3/stacked-form",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var heading3 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo2 = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap3/inline-form",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var heading4 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo3 = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap3/without-label-form",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var heading5 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
bootstrap3: new FormValidation.plugins.Bootstrap3({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.col-xs-4';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.col-xs-3';
            
            default:
                return '.form-group';
        }
    }
}),
` },
		$$inline: true
	});

	var demo4 = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap3/multiple-fields",
		frameworks: ['bootstrap3']
	},
		$$inline: true
	});

	var heading6 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Using Glyphicons icons',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/bootstrap",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/plugins/bulma",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Bootstrap 3 plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Integrate with ");
			a = element("a");
			t3 = text("Bootstrap 3");
			t4 = text(" framework. Support the latest version of Bootstrap 3 (v3.4.1)");
			t5 = space();
			tip.$$.fragment.c();
			t6 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t7 = space();
			p0 = element("p");
			t8 = text("The following piece of code is the starting point to validate the form made in Bootsrap 3:");
			t9 = space();
			samplecode0.$$.fragment.c();
			t10 = space();
			p1 = element("p");
			t11 = text("The sample code above assumes that the FormValidation files are placed inside the ");
			code0 = element("code");
			t12 = text("vendors");
			t13 = text(" directory. You might need to change the path depending on where you place them on the server.");
			t14 = space();
			p2 = element("p");
			t15 = text("The next sections list out some examples of various forms made with Bootstrap 3.");
			t16 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t17 = space();
			demo0.$$.fragment.c();
			t18 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t19 = space();
			demo1.$$.fragment.c();
			t20 = space();
			section3 = element("section");
			heading3.$$.fragment.c();
			t21 = space();
			demo2.$$.fragment.c();
			t22 = space();
			section4 = element("section");
			heading4.$$.fragment.c();
			t23 = space();
			demo3.$$.fragment.c();
			t24 = space();
			section5 = element("section");
			heading5.$$.fragment.c();
			t25 = space();
			p3 = element("p");
			t26 = text("In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.");
			t27 = space();
			p4 = element("p");
			t28 = text("By default, the Bootstrap3 plugin will look for the ");
			code1 = element("code");
			t29 = text(".form-group");
			t30 = text(" element. In the following example, the ");
			code2 = element("code");
			t31 = text("firstName");
			t32 = text(" and ");
			code3 = element("code");
			t33 = text("lastName");
			t34 = text("\n            fields are placed inside ");
			code4 = element("code");
			t35 = text(".col-xs-4");
			t36 = text(" containers. Meanwhile, the ");
			code5 = element("code");
			t37 = text("city");
			t38 = text(", ");
			code6 = element("code");
			t39 = text("state");
			t40 = text(" and ");
			code7 = element("code");
			t41 = text("zipcode");
			t42 = text(" fields can be found inside the ");
			code8 = element("code");
			t43 = text(".col-xs-3");
			t44 = text(" containers.");
			t45 = space();
			p5 = element("p");
			t46 = text("The ");
			code9 = element("code");
			t47 = text("rowSelector");
			t48 = text(" option will be used to help the plugin determine the field containers as following:");
			t49 = space();
			div0 = element("div");
			samplecode1.$$.fragment.c();
			t50 = space();
			demo4.$$.fragment.c();
			t51 = space();
			section6 = element("section");
			heading6.$$.fragment.c();
			t52 = space();
			ul = element("ul");
			li = element("li");
			t53 = text("v1.0.0: First release");
			t54 = space();
			examples.$$.fragment.c();
			t55 = space();
			section7 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t56 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Bootstrap 3 plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Integrate with ");

			a = claim_element(h2_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t3 = claim_text(a_nodes, "Bootstrap 3");
			a_nodes.forEach(detach);
			t4 = claim_text(h2_nodes, " framework. Support the latest version of Bootstrap 3 (v3.4.1)");
			h2_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n\n    ");
			tip.$$.fragment.l(nodes);
			t6 = claim_text(nodes, "\n    \n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t7 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t8 = claim_text(p0_nodes, "The following piece of code is the starting point to validate the form made in Bootsrap 3:");
			p0_nodes.forEach(detach);
			t9 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			t10 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t11 = claim_text(p1_nodes, "The sample code above assumes that the FormValidation files are placed inside the ");

			code0 = claim_element(p1_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t12 = claim_text(code0_nodes, "vendors");
			code0_nodes.forEach(detach);
			t13 = claim_text(p1_nodes, " directory. You might need to change the path depending on where you place them on the server.");
			p1_nodes.forEach(detach);
			t14 = claim_text(section0_nodes, "\n        ");

			p2 = claim_element(section0_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t15 = claim_text(p2_nodes, "The next sections list out some examples of various forms made with Bootstrap 3.");
			p2_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t16 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t17 = claim_text(section1_nodes, "\n        ");
			demo0.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t18 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t19 = claim_text(section2_nodes, "\n        ");
			demo1.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t20 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			heading3.$$.fragment.l(section3_nodes);
			t21 = claim_text(section3_nodes, "\n        ");
			demo2.$$.fragment.l(section3_nodes);
			section3_nodes.forEach(detach);
			t22 = claim_text(nodes, "\n\n    ");

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			heading4.$$.fragment.l(section4_nodes);
			t23 = claim_text(section4_nodes, "\n        ");
			demo3.$$.fragment.l(section4_nodes);
			section4_nodes.forEach(detach);
			t24 = claim_text(nodes, "\n\n    ");

			section5 = claim_element(nodes, "SECTION", { class: true }, false);
			var section5_nodes = children(section5);

			heading5.$$.fragment.l(section5_nodes);
			t25 = claim_text(section5_nodes, "\n        ");

			p3 = claim_element(section5_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t26 = claim_text(p3_nodes, "In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.");
			p3_nodes.forEach(detach);
			t27 = claim_text(section5_nodes, "\n        ");

			p4 = claim_element(section5_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t28 = claim_text(p4_nodes, "By default, the Bootstrap3 plugin will look for the ");

			code1 = claim_element(p4_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t29 = claim_text(code1_nodes, ".form-group");
			code1_nodes.forEach(detach);
			t30 = claim_text(p4_nodes, " element. In the following example, the ");

			code2 = claim_element(p4_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t31 = claim_text(code2_nodes, "firstName");
			code2_nodes.forEach(detach);
			t32 = claim_text(p4_nodes, " and ");

			code3 = claim_element(p4_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t33 = claim_text(code3_nodes, "lastName");
			code3_nodes.forEach(detach);
			t34 = claim_text(p4_nodes, "\n            fields are placed inside ");

			code4 = claim_element(p4_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t35 = claim_text(code4_nodes, ".col-xs-4");
			code4_nodes.forEach(detach);
			t36 = claim_text(p4_nodes, " containers. Meanwhile, the ");

			code5 = claim_element(p4_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t37 = claim_text(code5_nodes, "city");
			code5_nodes.forEach(detach);
			t38 = claim_text(p4_nodes, ", ");

			code6 = claim_element(p4_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t39 = claim_text(code6_nodes, "state");
			code6_nodes.forEach(detach);
			t40 = claim_text(p4_nodes, " and ");

			code7 = claim_element(p4_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t41 = claim_text(code7_nodes, "zipcode");
			code7_nodes.forEach(detach);
			t42 = claim_text(p4_nodes, " fields can be found inside the ");

			code8 = claim_element(p4_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t43 = claim_text(code8_nodes, ".col-xs-3");
			code8_nodes.forEach(detach);
			t44 = claim_text(p4_nodes, " containers.");
			p4_nodes.forEach(detach);
			t45 = claim_text(section5_nodes, "\n        ");

			p5 = claim_element(section5_nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t46 = claim_text(p5_nodes, "The ");

			code9 = claim_element(p5_nodes, "CODE", {}, false);
			var code9_nodes = children(code9);

			t47 = claim_text(code9_nodes, "rowSelector");
			code9_nodes.forEach(detach);
			t48 = claim_text(p5_nodes, " option will be used to help the plugin determine the field containers as following:");
			p5_nodes.forEach(detach);
			t49 = claim_text(section5_nodes, "\n        ");

			div0 = claim_element(section5_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode1.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t50 = claim_text(section5_nodes, "\n        ");
			demo4.$$.fragment.l(section5_nodes);
			section5_nodes.forEach(detach);
			t51 = claim_text(nodes, "\n\n    ");

			section6 = claim_element(nodes, "SECTION", { class: true }, false);
			var section6_nodes = children(section6);

			heading6.$$.fragment.l(section6_nodes);
			t52 = claim_text(section6_nodes, "\n        ");

			ul = claim_element(section6_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li = claim_element(ul_nodes, "LI", {}, false);
			var li_nodes = children(li);

			t53 = claim_text(li_nodes, "v1.0.0: First release");
			li_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section6_nodes.forEach(detach);
			t54 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t55 = claim_text(nodes, "\n\n    ");

			section7 = claim_element(nodes, "SECTION", { class: true }, false);
			var section7_nodes = children(section7);

			div1 = claim_element(section7_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t56 = claim_text(div1_nodes, "\n            ");
			nextbutton.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			section7_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 100);
			a.href = "https://getbootstrap.com/docs/3.4";
			a.className = "blue dim link";
			add_location(a, file, 6, 49, 201);
			h2.className = "f4 fw4 tc lh-copy";
			add_location(h2, file, 6, 4, 156);
			p0.className = "lh-copy";
			add_location(p0, file, 12, 8, 560);
			add_location(code0, file, 47, 109, 1815);
			p1.className = "lh-copy";
			add_location(p1, file, 47, 8, 1714);
			p2.className = "lh-copy";
			add_location(p2, file, 48, 8, 1942);
			section0.className = "mv5";
			add_location(section0, file, 10, 4, 497);
			section1.className = "mv5";
			add_location(section1, file, 51, 4, 2066);
			section2.className = "mv5";
			add_location(section2, file, 56, 4, 2247);
			section3.className = "mv5";
			add_location(section3, file, 61, 4, 2422);
			section4.className = "mv5";
			add_location(section4, file, 66, 4, 2595);
			p3.className = "lh-copy";
			add_location(p3, file, 73, 8, 2871);
			add_location(code1, file, 74, 79, 3138);
			add_location(code2, file, 74, 143, 3202);
			add_location(code3, file, 74, 170, 3229);
			add_location(code4, file, 75, 37, 3288);
			add_location(code5, file, 75, 87, 3338);
			add_location(code6, file, 75, 106, 3357);
			add_location(code7, file, 75, 129, 3380);
			add_location(code8, file, 75, 181, 3432);
			p4.className = "lh-copy";
			add_location(p4, file, 74, 8, 3067);
			add_location(code9, file, 77, 31, 3511);
			p5.className = "lh-copy";
			add_location(p5, file, 77, 8, 3488);
			div0.className = "mb4";
			add_location(div0, file, 78, 8, 3632);
			section5.className = "mv5";
			add_location(section5, file, 71, 4, 2782);
			add_location(li, file, 107, 12, 4448);
			ul.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul, file, 106, 8, 4403);
			section6.className = "mv5";
			add_location(section6, file, 104, 4, 4336);
			div1.className = "flex";
			add_location(div1, file, 116, 8, 4614);
			section7.className = "mv5";
			add_location(section7, file, 115, 4, 4584);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			append(h2, a);
			append(a, t3);
			append(h2, t4);
			insert(target, t5, anchor);
			mount_component(tip, target, anchor);
			insert(target, t6, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t7);
			append(section0, p0);
			append(p0, t8);
			append(section0, t9);
			mount_component(samplecode0, section0, null);
			append(section0, t10);
			append(section0, p1);
			append(p1, t11);
			append(p1, code0);
			append(code0, t12);
			append(p1, t13);
			append(section0, t14);
			append(section0, p2);
			append(p2, t15);
			insert(target, t16, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t17);
			mount_component(demo0, section1, null);
			insert(target, t18, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t19);
			mount_component(demo1, section2, null);
			insert(target, t20, anchor);
			insert(target, section3, anchor);
			mount_component(heading3, section3, null);
			append(section3, t21);
			mount_component(demo2, section3, null);
			insert(target, t22, anchor);
			insert(target, section4, anchor);
			mount_component(heading4, section4, null);
			append(section4, t23);
			mount_component(demo3, section4, null);
			insert(target, t24, anchor);
			insert(target, section5, anchor);
			mount_component(heading5, section5, null);
			append(section5, t25);
			append(section5, p3);
			append(p3, t26);
			append(section5, t27);
			append(section5, p4);
			append(p4, t28);
			append(p4, code1);
			append(code1, t29);
			append(p4, t30);
			append(p4, code2);
			append(code2, t31);
			append(p4, t32);
			append(p4, code3);
			append(code3, t33);
			append(p4, t34);
			append(p4, code4);
			append(code4, t35);
			append(p4, t36);
			append(p4, code5);
			append(code5, t37);
			append(p4, t38);
			append(p4, code6);
			append(code6, t39);
			append(p4, t40);
			append(p4, code7);
			append(code7, t41);
			append(p4, t42);
			append(p4, code8);
			append(code8, t43);
			append(p4, t44);
			append(section5, t45);
			append(section5, p5);
			append(p5, t46);
			append(p5, code9);
			append(code9, t47);
			append(p5, t48);
			append(section5, t49);
			append(section5, div0);
			mount_component(samplecode1, div0, null);
			append(section5, t50);
			mount_component(demo4, section5, null);
			insert(target, t51, anchor);
			insert(target, section6, anchor);
			mount_component(heading6, section6, null);
			append(section6, t52);
			append(section6, ul);
			append(ul, li);
			append(li, t53);
			insert(target, t54, anchor);
			mount_component(examples, target, anchor);
			insert(target, t55, anchor);
			insert(target, section7, anchor);
			append(section7, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t56);
			mount_component(nextbutton, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);

			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

			var heading3_changes = {};
			if (changed.$$scope) heading3_changes.$$scope = { changed, ctx };
			heading3.$set(heading3_changes);

			var heading4_changes = {};
			if (changed.$$scope) heading4_changes.$$scope = { changed, ctx };
			heading4.$set(heading4_changes);

			var heading5_changes = {};
			if (changed.$$scope) heading5_changes.$$scope = { changed, ctx };
			heading5.$set(heading5_changes);

			var heading6_changes = {};
			if (changed.$$scope) heading6_changes.$$scope = { changed, ctx };
			heading6.$set(heading6_changes);

			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			tip.$$.fragment.i(local);

			heading0.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			demo0.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			demo1.$$.fragment.i(local);

			heading3.$$.fragment.i(local);

			demo2.$$.fragment.i(local);

			heading4.$$.fragment.i(local);

			demo3.$$.fragment.i(local);

			heading5.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo4.$$.fragment.i(local);

			heading6.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tip.$$.fragment.o(local);
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			demo0.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			demo1.$$.fragment.o(local);
			heading3.$$.fragment.o(local);
			demo2.$$.fragment.o(local);
			heading4.$$.fragment.o(local);
			demo3.$$.fragment.o(local);
			heading5.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo4.$$.fragment.o(local);
			heading6.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t5);
			}

			tip.$destroy(detaching);

			if (detaching) {
				detach(t6);
				detach(section0);
			}

			heading0.$destroy();

			samplecode0.$destroy();

			if (detaching) {
				detach(t16);
				detach(section1);
			}

			heading1.$destroy();

			demo0.$destroy();

			if (detaching) {
				detach(t18);
				detach(section2);
			}

			heading2.$destroy();

			demo1.$destroy();

			if (detaching) {
				detach(t20);
				detach(section3);
			}

			heading3.$destroy();

			demo2.$destroy();

			if (detaching) {
				detach(t22);
				detach(section4);
			}

			heading4.$destroy();

			demo3.$destroy();

			if (detaching) {
				detach(t24);
				detach(section5);
			}

			heading5.$destroy();

			samplecode1.$destroy();

			demo4.$destroy();

			if (detaching) {
				detach(t51);
				detach(section6);
			}

			heading6.$destroy();

			if (detaching) {
				detach(t54);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t55);
				detach(section7);
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
			document.title = "FormValidation • Bootstrap 3 plugin";
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
