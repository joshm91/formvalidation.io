import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MilligramLayout, b as Milligram } from './chunk.1ebb077a.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="row">
            <div class="column column-25">
                <label>Username</label>
            </div>
            <div class="column column-40">
                <input type="text" name="username" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Password</label>
            </div>
            <div class="column column-40">
                <input type="password" name="password" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters'
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                milligram: new FormValidation.plugins.Milligram(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            }
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/getting-started/usage/frameworks/Milligram.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/getting-started/usage/frameworks/Milligram.svelte";

// (1:0) <MilligramLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div2, div0, label0, t0, t1, div1, input0, t2, div5, div3, label1, t3, t4, div4, input1, t5, div8, div6, t6, div7, button, t7;

	return {
		c: function create() {
			form = element("form");
			div2 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Username");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div5 = element("div");
			div3 = element("div");
			label1 = element("label");
			t3 = text("Password");
			t4 = space();
			div4 = element("div");
			input1 = element("input");
			t5 = space();
			div8 = element("div");
			div6 = element("div");
			t6 = space();
			div7 = element("div");
			button = element("button");
			t7 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Username");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n            ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div5 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div3 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			label1 = claim_element(div3_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, "\n            ");

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			input1 = claim_element(div4_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n\n        ");

			div8 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div6 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div6_nodes.forEach(detach);
			t6 = claim_text(div8_nodes, "\n            ");

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			button = claim_element(div7_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t7 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 162);
			div0.className = "column column-25";
			add_location(div0, file, 3, 12, 115);
			attr(input0, "type", "text");
			input0.name = "username";
			add_location(input0, file, 7, 16, 264);
			div1.className = "column column-40";
			add_location(div1, file, 6, 12, 217);
			div2.className = "row";
			add_location(div2, file, 2, 8, 85);
			add_location(label1, file, 13, 16, 422);
			div3.className = "column column-25";
			add_location(div3, file, 12, 12, 375);
			attr(input1, "type", "password");
			input1.name = "password";
			add_location(input1, file, 16, 16, 524);
			div4.className = "column column-40";
			add_location(div4, file, 15, 12, 477);
			div5.className = "row";
			add_location(div5, file, 11, 8, 345);
			div6.className = "column column-25";
			add_location(div6, file, 21, 12, 639);
			button.type = "submit";
			button.className = "button-primary";
			add_location(button, file, 23, 16, 735);
			div7.className = "column column-75";
			add_location(div7, file, 22, 12, 688);
			div8.className = "row";
			add_location(div8, file, 20, 8, 609);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 1, 4, 42);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div2);
			append(div2, div0);
			append(div0, label0);
			append(label0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input0);
			append(form, t2);
			append(form, div5);
			append(div5, div3);
			append(div3, label1);
			append(label1, t3);
			append(div5, t4);
			append(div5, div4);
			append(div4, input1);
			append(form, t5);
			append(form, div8);
			append(div8, div6);
			append(div8, t6);
			append(div8, div7);
			append(div7, button);
			append(button, t7);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var milligramlayout = new MilligramLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			milligramlayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			milligramlayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(milligramlayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var milligramlayout_changes = {};
			if (changed.onLoaded) milligramlayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) milligramlayout_changes.$$scope = { changed, ctx };
			milligramlayout.$set(milligramlayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			milligramlayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			milligramlayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			milligramlayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            milligram: new Milligram(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/milligram',
                sampleCode: sampleCode,
            }),
        },
    }));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Milligram_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Milligram_1;
