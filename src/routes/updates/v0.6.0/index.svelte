<svelte:head>
	<title>FormValidation • v0.6.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.6.0</h1>
    <h2 class="f4 fw4 tc">Released 06 January 2015</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <p class="lh-copy">From v0.6.0, the plugin has new name: <strong>FormValidation</strong>. It supports validating form created by many frameworks including</p>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><a href="http://getbootstrap.com" class="blue dim link">Bootstrap</a></li>
            <li><a href="http://foundation.zurb.com" class="blue dim link">Foundation</a></li>
            <li><a href="http://purecss.io" class="blue dim link">Pure</a></li>
            <li><a href="http://semantic-ui.com" class="blue dim link">Semantic UI</a></li>
            <li><a href="http://getuikit.com" class="blue dim link">UIKit</a></li>
        </ul>

        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>transformer</code> option, allowing to hook the value of field before validating</li>
            <li>Support add-on</li>
            <li>Support Zurb Foundation framework</li>
            <li>Support UI Kit framework</li>
            <li>Support Semantic UI framework</li>
            <li>Support Pure framework</li>
            <li>Add <code>setLocale()</code> and <code>getLocale()</code> methods to support multiple languages</li>
            <li>Add <code>validateContainer()</code> method</li>
            <li>Add UAE <a href="/guide/validators/phone" class="blue dim link">phone number</a> validator</li>
            <li>Add <a href="/guide/validators/ein" class="blue dim link">EIN</a> validator</li>
            <li>Add <a href="/guide/validators/bic" class="blue dim link">BIC (ISO 9362)</a> validator</li>
            <li>Add <code>composer.json</code> file</li>
            <li>Add <code>err</code>, <code>icon</code>, <code>row</code> options</li>
            <li>Add Spanish <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validator</li>
            <li>Support Spanish <a href="/guide/validators/id" class="blue dim link">CIF</a> validator</li>
            <li>Add India <a href="/guide/validators/phone" class="blue dim link">phone number</a> validator</li>
            <li>Add India <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validator></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Remove hexColor validator. Use <a href="/guide/validators/color" class="blue dim link">color</a> validator instead</li>
            <li>Change event <code>error.x.x</code> to <code>err.x.x</code> to avoid <code>window.onerror</code> being invoked by jQuery</li>
            <li>Remove tab behavior from base class</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Look for the field inside form first when using selector</li>
            <li>Add <code>allowEmptyProtocol</code> option to set optional protocol in <a href="/guide/validators/uri" class="blue dim link">uri</a> validator</li>
            <li>Improve <a href="/guide/validators/identical" class="blue dim link">identical</a> validator</li>
            <li>Show the credit card icon based on its type</li>
            <li>Showing tooltip/popover when moving over or clicking the feedback icon (Bootstrap 3.3.0)</li>
            <li>Use <code>jQuery</code> instead of <code>window.jQuery</code></li>
            <li>Allow to reuse data which is returned by the validator</li>
            <li>Don't need to set the <a href="/guide/validators/different" class="blue dim link">different</a> validator for both fields</li>
            <li>Improve the <a href="/guide/validators/id" class="blue dim link">CPF</a> validator</li>
            <li>Add sample data for <a href="/guide/validators/id" class="blue dim link">CPF</a> validator</li>
            <li>Improve Spanish <a href="/guide/validators/phone" class="blue dim link">phone</a> validator</li>
            <li>Improve Slovenian <a href="/guide/validators/vat" class="blue dim link">vat number</a> validator</li>
            <li>Improve tooltip style when working with Semantic UI form</li>
            <li>Fix destroying Semantic UI popup</li>
            <li>Fix typo in UIKit class</li>
            <li>Validators return true for not supported countries</li>
            <li>Support to use a <code>Date</code> object as value for <a href="/guide/validators/date" class="blue dim link">min and max</a> options</li>
            <li>Improve cvv validator</li>
            <li><a href="/guide/validators/uri" class="blue dim link">uri</a> validator gets slower if more than 25 characters</li>
            <li>The <code>isValidContainer()</code> method should return <code>null</code> if the container consists of at least one field which is not validated yet or being validated</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/cusip" class="blue dim link">cusip</a> validator doesn't work</li>
            <li>ix the <a href="/guide/validators/date" class="blue dim link">date</a> validator issue where accepts <code>2014-11-1 23:</code> as valid <code>YYYY-MM-DD h:m</code> date</li>
            <li>The <a href="/guide/validators/color" class="blue dim link">color</a> validator doesn't provide <code>html5Attributes</code> mapping</li>
            <li>Update Brazil <a href="/guide/validators/id" class="blue dim link">ID</a> validator to support working with Mask plugin</li>
            <li>Fix the icon without label class</li>
            <li><a href="/guide/validators/identical" class="blue dim link">identical</a> validator allows to compare with any input</li>
            <li>Fix <code>validateContainer()</code> to use map value instead of key</li>
            <li>Show the <code>validating</code> icon when the field is being validated</li>
            <li>Fix bug of US <a href="/guide/validators/phone" class="blue dim link">phone number</a> validator</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v0.6.0</Heading>
        <p class="lh-copy">From v0.6.0, the plugin name is changed to <strong>FormValidation</strong>. To upgrade from v0.5.3 to v0.6.0, perform the following steps:</p>
        <h3>Required Step: Changing CSS, JavaScript paths</h3>

        <p class="lh-copy">This step is <strong>required</strong>.</p>
        <p class="lh-copy">In v0.5.3:</p>
    <SampleCode lang="html" code={`
<!-- v0.5.3 -->
<!-- Path to Bootstrap CSS v3.0.0 or higher -->
<link-tag rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css">

<!-- Path to BootstrapValidator CSS -->
<link-tag rel="stylesheet" href="/vendor/bootstrapvalidator/dist/css/bootstrapValidator(.min).css">

<!-- jQuery v1.9.1 or higher -->
<script-tag src="/vendor/jquery/jquery.min.js"></script-tag>

<!-- Path to Bootstrap JS -->
<script-tag src="/vendor/bootstrap/js/bootstrap.min.js"></script-tag>

<!-- Path to BootstrapValidator JS -->
<script-tag src="/vendor/bootstrapvalidator/dist/js/bootstrapValidator(.min).js"></script-tag>
`} />

        <p class="lh-copy">In v0.6.0:</p>
        <SampleCode lang="html" code={`
<!-- Path to Bootstrap CSS v3.0.0 or higher -->
<link-tag rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css">

<!-- FormValidation CSS file -->
<link-tag rel="stylesheet" href="/vendor/formvalidation/dist/css/formValidation(.min).css">

<!-- jQuery v1.9.1 or higher -->
<script-tag src="/vendor/jquery/jquery.min.js"></script-tag>

<!-- Path to Bootstrap JS -->
<script-tag src="/vendor/bootstrap/js/bootstrap.min.js"></script-tag>

<!-- FormValidation plugin and the class supports validating Bootstrap form -->
<script-tag src="/vendor/formvalidation/dist/js/formValidation(.min).js"></script-tag>
<script-tag src="/vendor/formvalidation/dist/js/framework/bootstrap(.min).js"></script-tag>
`} />
        <Tip heading="Note">Don't confuse <code>bootstrap(.min).js</code> file provided by the Bootstrap framework with <code>bootstrap(.min).js</code> provided by FormValidation which is placed inside the <code>formvalidation/dist/js/framework</code> directory.
            They are two different files and both of them need to be included as mentioned above</Tip>

        <h3>Required Step: Changing your own validator</h3>

        <p class="lh-copy">You can ignore this step in case you don't have any your own validators. Otherwise, change its declaration as following:</p>

        <SampleCode lang="html" code={`
// v0.5.3    
(function($) {
    $.fn.bootstrapValidator.validators.yourValidatorName = {
        validate: function(validator, $field, options) {
            ...
        }
    };
}(window.jQuery));    

// v0.6.0
(function($) {
    FormValidation.Validator.yourValidatorName = {
        validate: function(validator, $field, options) {
            // ...
            // The validation code is the same
        }
    };
}(window.jQuery));
`} />

        <h3>Optional Step: Calling plugin</h3>

        <p class="lh-copy">After completing the steps above, you can call the plugin by both programmatic and declarative usages as before.</p>
        <p class="lh-copy"><strong>Using v0.5.3 options as your current one are supported in all v0.6.x releases</strong>. It means that you will have a lot of time to upgrade your code while current one still work.</p>
        <p class="lh-copy">Anyway, it is recommended to change the plugin calling, options which are listed as following:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu tc">v0.5.3</th>
                <th class="pv2 ph3 tl f6 fw6 ttu tc">v0.6.0</th>
            </tr>
            <tr class="bg-light-blue white tc">
                <td colspan="2" class="pv2 ph3">Attribute</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Use <code>data-bv-xxx</code> attribute</td>
                <td class="pv2 ph3">Use <code>data-fv-xxx</code> attribute</td>
            </tr>

            <tr class="bg-light-blue white tc">
                <td colspan="2" class="pv2 ph3">Form settings</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>container</code></td>
                <td class="pv2 ph3"><code>err.container</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>feedbackIcons</code></td>
                <td class="pv2 ph3"><code>icon</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>group</code></td>
                <td class="pv2 ph3"><code>row.selector</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>submitButtons</code></td>
                <td class="pv2 ph3"><code>button.selector</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top">
                    <SampleCode lang="javascript" code={`
$(form).bootstrapValidator({
    container: 'tooltip',
    feedbackIcons: {
        valid: '...',
        invalid: '...',
        validating: '...'
    },
    group: 'td',
    submitButtons: '#submitButton'
});
`} />
                </td>
                <td class="pv2 ph3 v-top">
                    <SampleCode lang="html" code={`
$(form).formValidation({
    framework: 'bootstrap',
    err: {
        container: 'tooltip'
    }
    icon: {
        valid: '...',
        invalid: '...',
        validating: '...'
    },
    row: {
        selector: 'td'
    },
    button: {
        selector: '#submitButton'
    }
});
`} />
                </td>
            </tr>

            <tr class="bg-light-blue white tc">
                <td colspan="2" class="pv2 ph3">Field settings</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>container</code></td>
                <td class="pv2 ph3"><code>err</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>feedbackIcons</code></td>
                <td class="pv2 ph3"><code>icon</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>group</code></td>
                <td class="pv2 ph3"><code>row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top">
                    <SampleCode lang="javascript" code={`
$(form).bootstrapValidator({
    fields: {
        fieldName: {
            container: 'tooltip',
            feedbackIcons: false,
            group: '.col-sm-3',
            validators: {
                ...
            }
        }
    }
});
`} />
                </td>
                <td class="pv2 ph3 v-top">
                    <SampleCode lang="javascript" code={`
$(form).formValidation({
    framework: 'bootstrap',
    fields: {
        fieldName: {
            err: 'tooltip',
            icon: false,
            row: '.col-sm-3',
            validators: {
                ...
            }
        }
    }
});
`} />
                </td>
            </tr>

            <tr class="bg-light-blue white tc">
                <td colspan="2" class="pv2 ph3">Events</td>
            </tr>
            <tr class="striped--light-gray">
                <td colspan="2" class="pv2 ph3">
                    <p class="lh-copy">There are two changes about the event names:</p>
                    <ul class="pa0 ma0 ml3 lh-copy">
                        <li>The namespace <code>.bv</code> is changed to <code>.fv</code></li>
                        <li>The namespace <code>error.</code> is changed to <code>err.</code> to avoid <code>window.onerror</code> being invoked by jQuery</li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>init.form.bv</code></td>
                <td class="pv2 ph3"><code>init.form.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>error.form.bv</code></td>
                <td class="pv2 ph3"><code>err.form.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>success.form.bv</code></td>
                <td class="pv2 ph3"><code>success.form.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>added.field.bv</code></td>
                <td class="pv2 ph3"><code>added.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>removed.field.bv</code></td>
                <td class="pv2 ph3"><code>removed.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>init.field.bv</code></td>
                <td class="pv2 ph3"><code>init.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>error.field.bv</code></td>
                <td class="pv2 ph3"><code>err.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>success.field.bv</code></td>
                <td class="pv2 ph3"><code>success.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>status.field.bv</code></td>
                <td class="pv2 ph3"><code>status.field.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>error.validator.bv</code></td>
                <td class="pv2 ph3"><code>err.validator.fv</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>success.validator.bv</code></td>
                <td class="pv2 ph3"><code>success.validator.fv</code></td>
            </tr>
        </table>

        <p class="lh-copy">The last thing, the hexColor validator, deprecated in v0.5.3, is replaced with <a href="/guide/validators/color" class="blue dim link">color</a> validator.</p>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
import Tip from '../../../components/Tip.svelte';
</script>