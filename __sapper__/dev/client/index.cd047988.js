import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
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
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/showing-dynamic-message/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/showing-dynamic-message/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p, t2, t3, ul, li0, t4, t5, li1, t6, t7, li2, t8, t9, li3, t10, t11, t12, t13, current;

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/showing-dynamic-message",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Hiding messages',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
        'Showing only one message each time',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['callback'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Showing dynamic message");
			t1 = space();
			section = element("section");
			p = element("p");
			t2 = text("The form below ask to enter a secure password, which must satisfies all the following conditions:");
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			t4 = text("Must be more than 8 characters long");
			t5 = space();
			li1 = element("li");
			t6 = text("Must contain at least one upper case character");
			t7 = space();
			li2 = element("li");
			t8 = text("Must contain at least one lower case character");
			t9 = space();
			li3 = element("li");
			t10 = text("Must contain at least one digit");
			t11 = space();
			demo.$$.fragment.c();
			t12 = space();
			examples.$$.fragment.c();
			t13 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Showing dynamic message");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p = claim_element(section_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t2 = claim_text(p_nodes, "The form below ask to enter a secure password, which must satisfies all the following conditions:");
			p_nodes.forEach(detach);
			t3 = claim_text(section_nodes, "\n        ");

			ul = claim_element(section_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t4 = claim_text(li0_nodes, "Must be more than 8 characters long");
			li0_nodes.forEach(detach);
			t5 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t6 = claim_text(li1_nodes, "Must contain at least one upper case character");
			li1_nodes.forEach(detach);
			t7 = claim_text(ul_nodes, "\n            ");

			li2 = claim_element(ul_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t8 = claim_text(li2_nodes, "Must contain at least one lower case character");
			li2_nodes.forEach(detach);
			t9 = claim_text(ul_nodes, "\n            ");

			li3 = claim_element(ul_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t10 = claim_text(li3_nodes, "Must contain at least one digit");
			li3_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t11 = claim_text(section_nodes, "\n\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t12 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t13 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 105);
			p.className = "lh-copy";
			add_location(p, file, 8, 8, 196);
			add_location(li0, file, 10, 12, 370);
			add_location(li1, file, 11, 12, 427);
			add_location(li2, file, 12, 12, 495);
			add_location(li3, file, 13, 12, 563);
			ul.className = "ma0 mb4 pl3 lh-copy";
			add_location(ul, file, 9, 8, 325);
			section.className = "mv5";
			add_location(section, file, 7, 4, 166);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p);
			append(p, t2);
			append(section, t3);
			append(section, ul);
			append(ul, li0);
			append(li0, t4);
			append(ul, t5);
			append(ul, li1);
			append(li1, t6);
			append(ul, t7);
			append(ul, li2);
			append(li2, t8);
			append(ul, t9);
			append(ul, li3);
			append(li3, t10);
			append(section, t11);
			mount_component(demo, section, null);
			insert(target, t12, anchor);
			mount_component(examples, target, anchor);
			insert(target, t13, anchor);
			mount_component(relatedvalidators, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
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

			demo.$destroy();

			if (detaching) {
				detach(t12);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t13);
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
			document.title = "FormValidation • Showing dynamic message";
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
