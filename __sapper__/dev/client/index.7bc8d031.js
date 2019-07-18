import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/api/disable-validator/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/api/disable-validator/index.svelte";

// (27:12) <PrevButton target="/guide/api/destroy">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("destroy() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "destroy() method");
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

// (28:12) <NextButton target="/guide/api/enable-validator">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("enableValidator() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "enableValidator() method");
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
	var h1, t0, t1, h2, t2, t3, section0, div0, t4, p, sup0, t5, t6, t7, ul, li0, code0, t8, t9, sup1, t10, t11, t12, li1, code1, t13, t14, t15, t16, section1, div1, t17, current;

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `disableValidator(field: String, validator: String): Core` },
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Enabling validators on the fly',
        'Switching validators on the same field',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/api/destroy",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/api/enable-validator",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("disableValidator()");
			t1 = space();
			h2 = element("h2");
			t2 = text("Disable particular validator for given field.");
			t3 = space();
			section0 = element("section");
			div0 = element("div");
			samplecode.$$.fragment.c();
			t4 = space();
			p = element("p");
			sup0 = element("sup");
			t5 = text("*");
			t6 = text(" presents a required parameter");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			code0 = element("code");
			t8 = text("field");
			t9 = space();
			sup1 = element("sup");
			t10 = text("*");
			t11 = text(" — The field name");
			t12 = space();
			li1 = element("li");
			code1 = element("code");
			t13 = text("validator");
			t14 = text(" — The validator name. If it isn't specified, all validators will be disabled");
			t15 = space();
			examples.$$.fragment.c();
			t16 = space();
			section1 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t17 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "disableValidator()");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Disable particular validator for given field.");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			div0 = claim_element(section0_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t4 = claim_text(section0_nodes, "\n        ");

			p = claim_element(section0_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			sup0 = claim_element(p_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t5 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t6 = claim_text(p_nodes, " presents a required parameter");
			p_nodes.forEach(detach);
			t7 = claim_text(section0_nodes, "\n        ");

			ul = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			code0 = claim_element(li0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t8 = claim_text(code0_nodes, "field");
			code0_nodes.forEach(detach);
			t9 = claim_text(li0_nodes, " ");

			sup1 = claim_element(li0_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t10 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			t11 = claim_text(li0_nodes, " — The field name");
			li0_nodes.forEach(detach);
			t12 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			code1 = claim_element(li1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t13 = claim_text(code1_nodes, "validator");
			code1_nodes.forEach(detach);
			t14 = claim_text(li1_nodes, " — The validator name. If it isn't specified, all validators will be disabled");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t15 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t16 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			div1 = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t17 = claim_text(div1_nodes, "\n            ");
			nextbutton.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 107);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 163);
			div0.className = "mb3";
			add_location(div0, file, 9, 8, 271);
			add_location(sup0, file, 12, 29, 444);
			p.className = "lh-copy i";
			add_location(p, file, 12, 8, 423);
			add_location(code0, file, 14, 16, 544);
			add_location(sup1, file, 14, 35, 563);
			add_location(li0, file, 14, 12, 540);
			add_location(code1, file, 15, 16, 614);
			add_location(li1, file, 15, 12, 610);
			ul.className = "ma0 pl3 lh-copy";
			add_location(ul, file, 13, 8, 499);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 241);
			div1.className = "flex";
			add_location(div1, file, 25, 8, 912);
			section1.className = "mv5";
			add_location(section1, file, 24, 4, 882);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			append(section0, div0);
			mount_component(samplecode, div0, null);
			append(section0, t4);
			append(section0, p);
			append(p, sup0);
			append(sup0, t5);
			append(p, t6);
			append(section0, t7);
			append(section0, ul);
			append(ul, li0);
			append(li0, code0);
			append(code0, t8);
			append(li0, t9);
			append(li0, sup1);
			append(sup1, t10);
			append(li0, t11);
			append(ul, t12);
			append(ul, li1);
			append(li1, code1);
			append(code1, t13);
			append(li1, t14);
			insert(target, t15, anchor);
			mount_component(examples, target, anchor);
			insert(target, t16, anchor);
			insert(target, section1, anchor);
			append(section1, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t17);
			mount_component(nextbutton, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
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
				detach(t3);
				detach(section0);
			}

			samplecode.$destroy();

			if (detaching) {
				detach(t15);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t16);
				detach(section1);
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
			document.title = "FormValidation • disableValidator() method";
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
