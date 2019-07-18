import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/integrating-with-tinymce/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/integrating-with-tinymce/index.svelte";

// (12:8) <Tip>
function create_default_slot_1(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("You should look at the ");
			a = element("a");
			t1 = text("basic principle");
			t2 = text(" when integrating FormValidation with 3rd party libraries");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "You should look at the ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "basic principle");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " when integrating FormValidation with 3rd party libraries");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/examples/integrating-with-3rd-party-libraries";
			a.className = "blue dim link";
			add_location(a, file, 11, 36, 937);
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

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, a0, t3, t4, t5, p1, t6, a1, t7, t8, t9, p2, t10, a2, t11, t12, t13, t14, t15, t16, current;

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/integrating-with-tinymce",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Integrating with Summernote',
        'Integrating with TinyMCE',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['callback', 'notEmpty', 'stringLength'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Integrating with TinyMCE");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("Most of ");
			a0 = element("a");
			t3 = text("WYSIWYG");
			t4 = text(" (What You See Is What You Get) editors generate some HTML tags for an empty string. So, basically, you can't use notEmpty validator to validate a text area which uses a WYSIWYG editor.");
			t5 = space();
			p1 = element("p");
			t6 = text("Instead, use the ");
			a1 = element("a");
			t7 = text("callback");
			t8 = text(" validator to get the raw HTML string, and check if it's the default value generated by the editor, then it's empty field.");
			t9 = space();
			p2 = element("p");
			t10 = text("The following example demonstrates how to do it with the ");
			a2 = element("a");
			t11 = text("TinyMCE");
			t12 = text(" editor.");
			t13 = space();
			tip.$$.fragment.c();
			t14 = space();
			demo.$$.fragment.c();
			t15 = space();
			examples.$$.fragment.c();
			t16 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Integrating with TinyMCE");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "Most of ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "WYSIWYG");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " (What You See Is What You Get) editors generate some HTML tags for an empty string. So, basically, you can't use notEmpty validator to validate a text area which uses a WYSIWYG editor.");
			p0_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t6 = claim_text(p1_nodes, "Instead, use the ");

			a1 = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t7 = claim_text(a1_nodes, "callback");
			a1_nodes.forEach(detach);
			t8 = claim_text(p1_nodes, " validator to get the raw HTML string, and check if it's the default value generated by the editor, then it's empty field.");
			p1_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t10 = claim_text(p2_nodes, "The following example demonstrates how to do it with the ");

			a2 = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t11 = claim_text(a2_nodes, "TinyMCE");
			a2_nodes.forEach(detach);
			t12 = claim_text(p2_nodes, " editor.");
			p2_nodes.forEach(detach);
			t13 = claim_text(section_nodes, "\n        ");
			tip.$$.fragment.l(section_nodes);
			t14 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t15 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t16 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 106);
			a0.href = "http://en.wikipedia.org/wiki/WYSIWYG";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 35, 225);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 198);
			a1.href = "/guide/validators/callback";
			a1.className = "blue dim link";
			add_location(a1, file, 9, 44, 539);
			p1.className = "lh-copy";
			add_location(p1, file, 9, 8, 503);
			a2.href = "https://www.tinymce.com";
			a2.className = "blue dim link";
			add_location(a2, file, 10, 84, 821);
			p2.className = "lh-copy";
			add_location(p2, file, 10, 8, 745);
			section.className = "mv5";
			add_location(section, file, 7, 4, 168);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, a0);
			append(a0, t3);
			append(p0, t4);
			append(section, t5);
			append(section, p1);
			append(p1, t6);
			append(p1, a1);
			append(a1, t7);
			append(p1, t8);
			append(section, t9);
			append(section, p2);
			append(p2, t10);
			append(p2, a2);
			append(a2, t11);
			append(p2, t12);
			append(section, t13);
			mount_component(tip, section, null);
			append(section, t14);
			mount_component(demo, section, null);
			insert(target, t15, anchor);
			mount_component(examples, target, anchor);
			insert(target, t16, anchor);
			mount_component(relatedvalidators, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);
		},

		i: function intro(local) {
			if (current) return;
			tip.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tip.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			tip.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t15);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t16);
			}

			relatedvalidators.$destroy(detaching);
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
			document.title = "FormValidation • Integrating with TinyMCE";
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
