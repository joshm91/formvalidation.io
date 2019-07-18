import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, C as listen, o as insert, p as append, r as noop } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as ReceiveMessage } from './chunk.75c83501.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Country</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
                        <option value="">Choose a country</option>
                        <option value="en_US">United States</option>
                        <option value="fr_FR">France</option>
                        <option value="it_IT">Italy</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Type a number</div>
                <div class="fl w-50">
                    <input type="text" name="number" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                number: {
                    validators: {
                        integer: {
                            message: 'The value is not a valid integer number',
                            // The default separators
                            thousandsSeparator: '',
                            decimalSeparator: '.'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    form.querySelector('[name="country"]').addEventListener('change', function(e) {
        let thousandsSeparator = '';
        let decimalSeparator = '.';

        switch (e.target.value) {
            case 'en_US':
                thousandsSeparator = ',';
                decimalSeparator = '.';
                break;

            case 'fr_FR':
                thousandsSeparator = ' ';
                decimalSeparator = ',';
                break;

            case 'it_IT':
                thousandsSeparator = '.';
                decimalSeparator = ',';
                break;

            case '':
            default:
                thousandsSeparator = '';
                decimalSeparator   = '.';
                break;
        }

        fv
            // Update the options
            .updateValidatorOption('number', 'integer', 'thousandsSeparator', thousandsSeparator)
            .updateValidatorOption('number', 'integer', 'decimalSeparator', decimalSeparator)
            // and revalidate the number
            .revalidateField('number');
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/integer/locale/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/integer/locale/Tachyons.svelte";

// (2:4) <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/integer/locale" on:received={receive}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, select, option0, t2, option1, t3, option2, t4, option3, t5, t6, div7, div6, div4, t7, t8, div5, input, dispose;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Country");
			t1 = space();
			div1 = element("div");
			select = element("select");
			option0 = element("option");
			t2 = text("Choose a country");
			option1 = element("option");
			t3 = text("United States");
			option2 = element("option");
			t4 = text("France");
			option3 = element("option");
			t5 = text("Italy");
			t6 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t7 = text("Type a number");
			t8 = space();
			div5 = element("div");
			input = element("input");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Country");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			select = claim_element(div1_nodes, "SELECT", { class: true, name: true }, false);
			var select_nodes = children(select);

			option0 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option0_nodes = children(option0);

			t2 = claim_text(option0_nodes, "Choose a country");
			option0_nodes.forEach(detach);

			option1 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option1_nodes = children(option1);

			t3 = claim_text(option1_nodes, "United States");
			option1_nodes.forEach(detach);

			option2 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option2_nodes = children(option2);

			t4 = claim_text(option2_nodes, "France");
			option2_nodes.forEach(detach);

			option3 = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option3_nodes = children(option3);

			t5 = claim_text(option3_nodes, "Italy");
			option3_nodes.forEach(detach);
			select_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n            ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			t7 = claim_text(div4_nodes, "Type a number");
			div4_nodes.forEach(detach);
			t8 = claim_text(div6_nodes, "\n                    ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input = claim_element(div5_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 5, 20, 266);
			option0.__value = "";
			option0.value = option0.__value;
			add_location(option0, file, 8, 28, 501);
			option1.__value = "en_US";
			option1.value = option1.__value;
			add_location(option1, file, 9, 28, 572);
			option2.__value = "fr_FR";
			option2.value = option2.__value;
			add_location(option2, file, 10, 28, 645);
			option3.__value = "it_IT";
			option3.value = option3.__value;
			add_location(option3, file, 11, 28, 711);
			select.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			select.name = "country";
			add_location(select, file, 7, 24, 371);
			div1.className = "fl w-50";
			add_location(div1, file, 6, 20, 325);
			div2.className = "fl w-100";
			add_location(div2, file, 4, 16, 223);
			div3.className = "cf mb2";
			add_location(div3, file, 3, 12, 186);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 18, 20, 943);
			attr(input, "type", "text");
			input.name = "number";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 20, 24, 1054);
			div5.className = "fl w-50";
			add_location(div5, file, 19, 20, 1008);
			div6.className = "fl w-100";
			add_location(div6, file, 17, 16, 900);
			div7.className = "cf mb2";
			add_location(div7, file, 16, 12, 863);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 2, 8, 139);
			dispose = listen(select, "change", ctx.changeCountry);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, select);
			append(select, option0);
			append(option0, t2);
			append(select, option1);
			append(option1, t3);
			append(select, option2);
			append(option2, t4);
			append(select, option3);
			append(option3, t5);
			append(form, t6);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div4, t7);
			append(div6, t8);
			append(div6, div5);
			append(div5, input);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			dispose();
		}
	};
}

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var current;

	var receivemessage = new ReceiveMessage({
		props: {
		channel: "SAMPLE_FIELD_VALUE",
		sender: "/guide/validators/integer/locale",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});
	receivemessage.$on("received", ctx.receive);

	return {
		c: function create() {
			receivemessage.$$.fragment.c();
		},

		l: function claim(nodes) {
			receivemessage.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(receivemessage, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var receivemessage_changes = {};
			if (changed.$$scope) receivemessage_changes.$$scope = { changed, ctx };
			receivemessage.$set(receivemessage_changes);
		},

		i: function intro(local) {
			if (current) return;
			receivemessage.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			receivemessage.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			receivemessage.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="number"]').value = v.sample;

    if (fv) {
        fv
            .updateValidatorOption('number', 'integer', 'thousandsSeparator', v.thousandsSeparator)
            .updateValidatorOption('number', 'integer', 'decimalSeparator', v.decimalSeparator)
            .revalidateField('number').then((result) => {
                window.parent.postMessage({
                    channel: 'DEMO_VALIDATE_RESULT',
                    sender: '/guide/validators/integer/locale',
                    data: {
                        input: v,
                        output: result
                    },
                }, '*');
            });
    }
};

const changeCountry = (event) => {
    let thousandsSeparator = '';
    let decimalSeparator = '.';

    switch (event.target.value) {
        case 'en_US':
            thousandsSeparator = ',';
            decimalSeparator = '.';
            break;

        case 'fr_FR':
            thousandsSeparator = ' ';
            decimalSeparator = ',';
            break;

        case 'it_IT':
            thousandsSeparator = '.';
            decimalSeparator = ',';
            break;

        case '':
        default:
            thousandsSeparator = '';
            decimalSeparator   = '.';
            break;
    }

    // Revalidate the number whenever user changes the country
    if (fv) {
        fv
            .updateValidatorOption('number', 'integer', 'thousandsSeparator', thousandsSeparator)
            .updateValidatorOption('number', 'integer', 'decimalSeparator', decimalSeparator)
            .revalidateField('number');
    }
};

onMount(() => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            number: {
                validators: {
                    integer: {
                        message: 'The value is not a valid integer number',
                        // The default separators
                        thousandsSeparator: '',
                        decimalSeparator: '.'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/integer/locale/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }));

    return () => {
        fv.destroy();
    };
});

	return { receive, changeCountry };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
