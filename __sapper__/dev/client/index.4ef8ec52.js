import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/examples/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, t2, t3, t4, t5, t6, t7, current;

	var examples0 = new Examples({
		props: {
		heading: "Basic examples",
		examples: [
        'Can not submit form after validation',
        'Using Ajax to submit the form',
        'Validating form manually',
    ]
	},
		$$inline: true
	});

	var examples1 = new Examples({
		props: {
		heading: "Advanced examples",
		examples: [
        'Adding dynamic field',
        'Asking fields to be unique',
        'Clearing field when clicking the icon',
        'Enabling validators on the fly',
        'Excluding field by given condition',
        'Multiple steps wizard',
        'Regenerating captcha when the form is invalid',
        'Requiring at least one field',
        'Switching validators on the same field',
        'Updating validator options',
        'Using HTML 5 inputs and attributes',
        'Validating checkbox list placed in multiple columns',
        'Validating multiple inputs as one',
    ]
	},
		$$inline: true
	});

	var examples2 = new Examples({
		props: {
		heading: "Validators",
		examples: [
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Creating a custom validator',
        'Disabling date',
        'Is a@b valid email address',
        'Preventing user to have same value as the placeholder',
        'Requiring all options to be selected',
        'Showing credit card icon',
        'Supporting custom date format',
        'Terms and conditions agreement validation',
        'Trimming a value',
        'Validating an avatar URL',
        'Validating credit card expiration date',
        'Validating date range',
        'Validating social account URL',
    ]
	},
		$$inline: true
	});

	var examples3 = new Examples({
		props: {
		heading: "Customize icons and messages",
		examples: [
        'Adjusting icon position',
        'Changing success and error colors',
        'Hiding messages',
        'Hiding success class',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing icons in custom area',
        'Showing messages in custom area',
        'Showing only one message each time',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]
	},
		$$inline: true
	});

	var examples4 = new Examples({
		props: {
		heading: "Improve user experience",
		examples: [
        'Enabling submit button only when all fields are valid',
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]
	},
		$$inline: true
	});

	var examples5 = new Examples({
		props: {
		heading: "Integrate with JavaScript frameworks",
		examples: [
        'Bundling with Rollup',
        'Bundling with Webpack',
        'Integrating with Svelte',
    ]
	},
		$$inline: true
	});

	var examples6 = new Examples({
		props: {
		heading: "Integrate with 3rd party libraries",
		examples: [
        'Integrating with 3rd party libraries',
        'Integrating with Bootbox',
        'Integrating with Bootstrap Datepicker',
        'Integrating with flatpickr',
        'Integrating with Select2',
        'Integrating with Summernote',
        'Integrating with TinyMCE',
        'Using flatpickr for start and end dates',
    ]
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("A collection of useful examples you can play with");
			t1 = space();
			examples0.$$.fragment.c();
			t2 = space();
			examples1.$$.fragment.c();
			t3 = space();
			examples2.$$.fragment.c();
			t4 = space();
			examples3.$$.fragment.c();
			t5 = space();
			examples4.$$.fragment.c();
			t6 = space();
			examples5.$$.fragment.c();
			t7 = space();
			examples6.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "A collection of useful examples you can play with");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n    ");
			examples0.$$.fragment.l(nodes);
			t2 = claim_text(nodes, "\n\n    ");
			examples1.$$.fragment.l(nodes);
			t3 = claim_text(nodes, "\n\n    ");
			examples2.$$.fragment.l(nodes);
			t4 = claim_text(nodes, "\n\n    ");
			examples3.$$.fragment.l(nodes);
			t5 = claim_text(nodes, "\n\n    ");
			examples4.$$.fragment.l(nodes);
			t6 = claim_text(nodes, "\n\n    ");
			examples5.$$.fragment.l(nodes);
			t7 = claim_text(nodes, "\n\n    ");
			examples6.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 90);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			mount_component(examples0, target, anchor);
			insert(target, t2, anchor);
			mount_component(examples1, target, anchor);
			insert(target, t3, anchor);
			mount_component(examples2, target, anchor);
			insert(target, t4, anchor);
			mount_component(examples3, target, anchor);
			insert(target, t5, anchor);
			mount_component(examples4, target, anchor);
			insert(target, t6, anchor);
			mount_component(examples5, target, anchor);
			insert(target, t7, anchor);
			mount_component(examples6, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			examples0.$$.fragment.i(local);

			examples1.$$.fragment.i(local);

			examples2.$$.fragment.i(local);

			examples3.$$.fragment.i(local);

			examples4.$$.fragment.i(local);

			examples5.$$.fragment.i(local);

			examples6.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			examples0.$$.fragment.o(local);
			examples1.$$.fragment.o(local);
			examples2.$$.fragment.o(local);
			examples3.$$.fragment.o(local);
			examples4.$$.fragment.o(local);
			examples5.$$.fragment.o(local);
			examples6.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
			}

			examples0.$destroy(detaching);

			if (detaching) {
				detach(t2);
			}

			examples1.$destroy(detaching);

			if (detaching) {
				detach(t3);
			}

			examples2.$destroy(detaching);

			if (detaching) {
				detach(t4);
			}

			examples3.$destroy(detaching);

			if (detaching) {
				detach(t5);
			}

			examples4.$destroy(detaching);

			if (detaching) {
				detach(t6);
			}

			examples5.$destroy(detaching);

			if (detaching) {
				detach(t7);
			}

			examples6.$destroy(detaching);
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
			document.title = "FormValidation • Examples";
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
